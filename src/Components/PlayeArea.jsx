import LocateBtn from "./LocateBtn"
import Board from "./Board"
import LeftBoard from "./LeftBoard"
import RightBoard from "./RightBoard"
import { useGlobal } from "../Context/UserContext"
import { useEffect, useRef } from "react"
import Loading from "./Loading"

export default function PlayeArea() {
    const { pauseGame, playerOver, gameOver, totalPlayer, ghochi } = useGlobal()

    return (
        <>
            <div className={`absolute top-0 left-0 z-20 w-[100vw] h-[100vh] transition-all duration-500 delay-2500
                 ${gameOver ? 'bg-[rgba(0,0,0,.95)] visible' : 'bg-[rgba(0,0,0,0)] invisible'}`}>
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-40 z-30 text-center w-fit h-fit
             bg-gray-600 p-5 border-5 border-black outline-3 outline-white rounded-2xl transition-all
              duration-1000 delay-2500 ${gameOver ? 'visible scale-[1]' : 'invisible scale-0'}`}>
                    <h1 className="font-bold font-Anton text-[40px] text-[#62ffd2]">GameOver</h1>
                    <h1 className="w-[500px] text-[25px] overflow-x-auto text-white mb-5">
                        {!(ghochi) ? totalPlayer !== 1 ? `${playerOver[(playerOver.length - 1)]} becomes ${playerOver[0]}'s servant` : `${playerOver[0]} Got the Value` : `${playerOver[(playerOver.length - 1)]} Got Life`}
                    </h1>
                    <div className="flex justify-around">
                        <LocateBtn colorss="blue" text="RePlay" location="main" refresh={true}/>
                        <LocateBtn colorss="blue" text="Menu" location="/"/>
                    </div>
                </div>
            </div>

            <div className={`absolute top-0 left-0 w-[100vw] h-[100vh] z-10 
            ${pauseGame || gameOver ? 'visible' : 'invisible'} ${playerOver.length === 0 ? 'bg-[rgba(0,0,0,0.95)]' : 'bg-[rgba(0,0,0,0.3)]'}`}>
                <Loading over={playerOver.length === 0} />
                <div
                    className={`absolute -top-20 left-[50%] -translate-x-1/2 ${ghochi ? 'bg-red-400' : 'bg-lime-400'} w-fit h-fit p-2.5
    text-3xl text-[#26001e] font-Anton border-[5px] border-black rounded-[10px]
    outline-[3px] outline-white
    transition-all duration-500
    ${playerOver.length > 0 && pauseGame ? "top-4 visible" : "invisible"}`
                    }
                >
                    {!(gameOver) ? !(ghochi) ? `${playerOver[(playerOver.length - 1)]} Win` : `${playerOver[(playerOver.length - 1)]} Ghochii` :
                        totalPlayer < 2 ? `${playerOver[(playerOver.length - 1)]} Win` :
                            !(ghochi) ? `${playerOver[(playerOver.length - 2)]} Win` : `${playerOver[(playerOver.length - 2)]} Ghochii`}
                </div>
            </div>

            <div className="flex justify-around items-center w-[100vw] h-[100vh] max-[600px]:flex-col">
                <LocateBtn corner={true} location="/" />
                <LeftBoard />
                <Board />
                <RightBoard />
            </div>
        </>
    )
}
