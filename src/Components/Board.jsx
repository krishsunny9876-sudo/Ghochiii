import React, { useEffect, useRef, useState } from 'react'
import { useGlobal } from '../Context/UserContext';

function Board() {

    const [clickedBox, setClickedBox] = useState([]);
    const maxBoxes = 36;

    const {
        targetNum,
        setTargetNum,
        currentPlayer,
        setCurrentPlayer,
        totalPlayer,
        playerOver,
        setPlayerOver,
        players,
        gameOver,
        setGameOver,
        setPauseGame,
        changeTarget,
        setChangeTarget,
        memorize,
        setMemorize
    } = useGlobal();

    const targetFound = useRef();

    const createBoard = () => {

        let numbers = [];

        for (let i = 1; i <= maxBoxes; i++) {
            numbers.push(i);
        }

        let boxes = [];

        for (let i = 1; i <= maxBoxes; i++) {

            let randomIndex = Math.floor(
                Math.random() * numbers.length
            );

            boxes.push({
                key: i,
                number: numbers[randomIndex]
            });

            numbers.splice(randomIndex, 1);
        }

        return boxes;
    }

    const [boxes, setBoxes] = useState([]);

    //Player Turn After Winning 1 or more PLayers
    useEffect(() => {

        if (playerOver.includes(players[currentPlayer - 1]) && playerOver.length !== totalPlayer) {

            if (currentPlayer < totalPlayer) {
                setCurrentPlayer(prev => prev + 1);
            }
            else {
                setCurrentPlayer(1);
            }
        }

    }, [currentPlayer, playerOver, players, totalPlayer, setCurrentPlayer]);

    //When Total Winning Player Vacancy Filled
    useEffect(() => {

        if (
            playerOver.length === (totalPlayer - 1)
            && totalPlayer > 2
        ) {

            const remainingPlayer = players.find(
                player => !playerOver.includes(player)
            );

            setPlayerOver(prev => [...prev, remainingPlayer]);

            setGameOver(true);
            setTimeout(() => {
                setPauseGame(false);
            }, 3000);
        }

    }, [playerOver, totalPlayer, players]);

    //Give Instruction to ResetGame or PauseGame
    const newTarget = () => {
        setChangeTarget(prev => (!(prev)));
        setPauseGame(true);
    }

    //PauseGame And ResetGame
    useEffect(() => {
        const setTime = setTimeout(() => {
            targetFound.current?.classList.remove('text-red-600');
            setPauseGame(false);
            setTargetNum('?');
            setBoxes(createBoard);
            setClickedBox([]);
            if (playerOver.length === (totalPlayer - 1) && totalPlayer !== 1) return;
            setMemorize(true);
            setTimeout(() => {
                setMemorize(false);
                let random_value = (Math.floor(
                    Math.random() * maxBoxes
                ) + 1);
                setTargetNum(random_value);
            }, 11000);
        }, 3000)

        return () => (clearTimeout(setTime))
    }, [changeTarget])

    const playerGotValue = () => {

        targetFound.current?.classList.add('text-red-600');

        if (totalPlayer === 2) {

            const loser = players.find(
                player => player !== players[currentPlayer - 1]
            );

            setPlayerOver([
                players[currentPlayer - 1],
                loser
            ]);

            setPauseGame(true);
            setGameOver(true);
            return;
        }

        else if (totalPlayer === 1) {

            setPlayerOver(prev => [
                ...prev,
                players[currentPlayer - 1]
            ]);

            setPauseGame(true);
            setGameOver(true);
            return;
        }

        setPlayerOver(prev => [
            ...prev,
            players[currentPlayer - 1]
        ]);

        newTarget();
    }

    return (
        <div className='grid grid-cols-6 grid-rows-6 gap-2 w-fit bg-blue-100 p-2.5 border-4 border-gray-600 rounded-[20px] 
        outline-8 outline-gray-800 mt-10 mb-10 max-[600px]:w-[100vw] max-[600px]:h-[100vw] max-[1200px]:p-0'>

            {boxes.map(obj => (

                <div
                    key={obj.key}

                    onClick={() => setClickedBox(prev => {

                        if (clickedBox.includes(obj.number)) {
                            return prev;
                        }

                        if (obj.number === targetNum) {
                            playerGotValue();
                        }

                        if (currentPlayer < totalPlayer) {
                            setCurrentPlayer(prev => prev + 1)
                        }

                        else if (currentPlayer === totalPlayer) {
                            setCurrentPlayer(1)
                        }

                        return [...prev, obj.number]
                    })}

                    className={`flex justify-center items-center 
                    ${(!(clickedBox.includes(obj.number)) && !(memorize))
                            ? 'bg-purple-700 border-3 border-purple-900 cursor-pointer hover:outline-2'
                            : ''
                        } 
                    w-[80px] h-[80px] max-[600px]:w-[15vw] max-[600px]:h-[15vw]`}
                >

                    <h1
                        className='text-purple-700 text-[35px] font-bold select-none max-[600px]:text-[30px]'
                        ref={obj.number === targetNum ? targetFound : null}
                    >
                        {obj.number}
                    </h1>

                </div>

            ))}

        </div>
    )
}

export default Board