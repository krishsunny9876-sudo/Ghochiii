import { useEffect, useState } from "react"
import PlayeArea from "./Components/PlayeArea"
import { UserContextProvider } from "./Context/UserContext"
import Home from "./Components/Home";

function App() {
  const playersName = JSON.parse(localStorage.getItem('ghochiPlayersName'))
  const [targetNum, setTargetNum] = useState((Math.floor(Math.random() * 36) + 1))
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const totalPlayer = Number(localStorage.getItem('ghochiPlayersNumber'))
  const [players, setPlayers] = useState([playersName.player1, playersName.player2, playersName.player3, playersName.player4]);
  const [playerOver, setPlayerOver] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [pauseGame, setPauseGame] = useState(true);
  const ghochi = localStorage.getItem('ghochiGameMod') === 'ghochi' ? true : false

  useEffect(() => {
    return (() => {
      localStorage.removeItem('ghochiGameMod');
      localStorage.removeItem('ghochiPlayersNumber');
      localStorage.removeItem('ghochiPlayersName');
    });
  }, [])

  return (
    <UserContextProvider value={{
      targetNum, setTargetNum,
      currentPlayer, setCurrentPlayer,
      totalPlayer, players, setPlayers,
      playerOver, setPlayerOver,
      gameOver, setGameOver,
      pauseGame, setPauseGame,
      ghochi
    }}>
      <div className={`absolute top-0 left-0 w-full h-full fixed
        z-[-5] bg-fixed ${currentPlayer === 1 ? 'bg-yellow-200' : currentPlayer === 2 ? 'bg-green-300' :
          currentPlayer === 3 ? 'bg-blue-300' : 'bg-red-300'} `}>
      </div>
      <PlayeArea />
    </UserContextProvider>
  )
}

export default App
