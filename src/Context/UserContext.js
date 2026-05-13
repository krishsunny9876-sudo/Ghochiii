import { createContext, useContext } from "react";

const userContext = createContext({
    targetNum: 12,
    currentPlayer: 1,
    totalPlayer: 4,
    playerOver: [],
    gameOver: false,
    pauseGame: true,
    players: ['User1', 'User2', 'User3', 'User4'],
    ghochi: false,
    reload:false
});

export const UserContextProvider = userContext.Provider;

export const useGlobal = () => {
    return (
        useContext(userContext)
    )
}