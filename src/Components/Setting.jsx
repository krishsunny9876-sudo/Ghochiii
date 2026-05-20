import React, { useEffect, useState } from 'react'
import LocateBtn from './LocateBtn'
import { useNavigate } from 'react-router-dom'

export default function Setting() {
    const navigate = useNavigate()
    const load = (e) => { e.preventDefault(); navigate('/main'); }
    const [ghochiMod, setGhochiMod] = useState(false)
    const [playersNumber, setPlayersNumber] = useState(4);
    
    const [playersName, setPlayersName] = useState({
        player1: 'guest1',
        player2: 'guest2',
        player3: 'guest3',
        player4: 'guest4'
    })

    useEffect(() => {
        setPlayersNumber(4);
    }, [ghochiMod])

    useEffect(() => {
        localStorage.setItem('ghochiGameMod', ghochiMod ? 'ghochi' : 'winner')
        localStorage.setItem('ghochiPlayersNumber', playersNumber)
        localStorage.setItem('ghochiPlayersName', JSON.stringify(playersName))
    }, [ghochiMod, playersNumber, playersName])


    return (
        <>
            <form onSubmit={load}>
                <div className='flex justify-between items-center w-[100vw] h-[100vh] max-[1300px]:flex-wrap justify-around max-[850px]:justify-center'>
                    <div className='w-[450px] h-[100vh] bg-[#000000bc] flex flex-col justify-center items-center
                    max-[1300px]:h-fit border-4 pt-2 border-white'>
                        <div className='w-fit p-[20px] bg-[#000000c0] flex flex-col justify-center items-center border-4 border-black rounded-[10px] mb-10 max-[500px]:mt-20'>
                            <h1 className='text-2xl text-white mr-2.5 mb-5'>Game Mod</h1>
                            <select
                                defaultValue="Winner Mod"
                                onChange={() => (setGhochiMod((prev) => !(prev)))}
                                className="bg-white border-3 border-black rounded-[10px] px-3 py-1 text-[25px] 
                                hover:outline-2 outline-white font-Polys font-bold"
                            >
                                <option value="1">Winner Mod</option>
                                <option value="2">Ghochiii Mod</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-[450px] h-[100vh] bg-[#000000bc] border-l-5 border-r-5 border-white flex flex-col justify-center items-center
                    max-[1300px]:h-fit border-4 border-white'>

                        <div className='w-fit p-[20px] bg-[#000000c0] flex justify-center items-center border-4 border-black rounded-[10px] mb-10 max-[500px]:mt-10'>
                            <h1 className='text-2xl text-white mr-2.5'>Number Of Players</h1>
                            <select

                                value={playersNumber}
                                onChange={(e) => setPlayersNumber(e.target.value)}
                                className="bg-white border-3 border-black rounded-[10px] px-3 py-1 text-[25px] 
                                hover:outline-2 outline-white font-Polys font-bold"
                            >
                                {ghochiMod ? '' : <option value="1">1</option>}
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>


                    <div className='w-[450px] h-[100vh] bg-[#000000bc] border-l-5 border-white flex flex-col justify-center items-center
                    max-[1300px]:h-fit border-4 border-white'>

                        <h1 className='text-white text-2xl font-SpaceGrok font-bold'>Players Name : </h1>

                        <div className='flex justify-center items-center w-fit h-fit'>
                            <div className='w-[60px] h-[60px] bg-amber-300 border-[3px] border-gray-800 mt-5 rounded-4xl
                    -translate-y-[11px] translate-x-[20px]'></div>
                            <input type="text" required placeholder='Player1 Name'
                                onChange={(e) => (setPlayersName(prev => ({ ...prev, player1: e.target.value })))}
                                value={playersName.player1}
                                className='bg-emerald-50 border-4 border-emerald-950 p-1 text-[20px] rounded-[10px] h-fit pl-[20px] max-[500px]:w-[210px]' />
                        </div>

                        {playersNumber > 1 && <div className='flex justify-center items-center w-fit h-fit'>
                            <div className='w-[60px] h-[60px] bg-green-600 border-[3px] border-gray-800 mt-5 rounded-4xl
                    -translate-y-[11px] translate-x-[20px]'></div>
                            <input type="text" required placeholder='Player2 Name'
                                onChange={(e) => (setPlayersName(prev => ({ ...prev, player2: e.target.value })))}
                                value={playersName.player2}
                                className='bg-emerald-50 border-4 border-emerald-950 p-1 text-[20px] rounded-[10px] h-fit pl-[20px] max-[500px]:w-[210px]' />
                        </div>}

                        {playersNumber > 2 && <div className='flex justify-center items-center w-fit h-fit'>
                            <div className='w-[60px] h-[60px] bg-blue-500 border-[3px] border-gray-800 mt-5 rounded-4xl
                    -translate-y-[11px] translate-x-[20px]'></div>
                            <input type="text" required placeholder='Player3 Name'
                                onChange={(e) => (setPlayersName(prev => ({ ...prev, player3: e.target.value })))}
                                value={playersName.player3}
                                className='bg-emerald-50 border-4 border-emerald-950 p-1 text-[20px] rounded-[10px] h-fit pl-[20px] max-[500px]:w-[210px]' />
                        </div>}

                        {playersNumber > 3 && <div className='flex justify-center items-center w-fit h-fit'>
                            <div className='w-[60px] h-[60px] bg-red-500 border-[3px] border-gray-800 mt-5 rounded-4xl
                    -translate-y-[11px] translate-x-[20px]'></div>
                            <input type="text" required placeholder='Player4 Name'
                                onChange={(e) => (setPlayersName(prev => ({ ...prev, player4: e.target.value })))}
                                value={playersName.player4}
                                className='bg-emerald-50 border-4 border-emerald-950 p-1 text-[20px] rounded-[10px] h-fit pl-[20px] max-[500px]:w-[210px]' />
                        </div>}
                        <LocateBtn text='Start' colorss='green' location='main' size={35} hover={1} func={() => { }} />
                    </div>
                </div>
            </form>
            <LocateBtn corner={true} text='Back' hover={1} />
        </>
    )
}
