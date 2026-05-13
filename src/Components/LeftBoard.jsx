import React, { useEffect } from 'react'
import { useGlobal } from '../Context/UserContext'
import Rip from './Rip';
import Winico from './Winico';

export default function LeftBoard() {
    const { targetNum, currentPlayer, totalPlayer, players, playerOver, ghochi } = useGlobal()

    const p1Name = players[0];
    const p2Name = players[1];
    const p3Name = players[2];
    const p4Name = players[3];

    return (
        <div>
            <div className='justify-items-center w-fit max-[500px]:mt-10'>
                <h1 className='text-[25px] font-bold text-gray-600 max-[1200px]:text-[16px] max-[1200px]:text-gray-800'>{ghochi ? 'Avoid this number' : 'Find the Number'}</h1>
                <div className='w-[90px] h-[70px] max-[1200px]:w-[60px] max-[1200px]:h-[50px] max-[1200px]:text-3xl bg-yellow-800 text-white text-5xl flex justify-center items-center font-bold border-4 border-black rounded-2xl mb-10 max-[1200px]:mb-0'>
                    {targetNum}
                </div>

                <div className='max-[600px]:flex max-[600px]:gap-3'>
                    {totalPlayer === 4 && <><div className={`w-[60px] h-[60px] max-[1200px]:w-[40px] max-[1200px]:h-[40px] bg-amber-300 border-[3px] border-gray-800 mt-5 rounded-4xl ${currentPlayer === 1 ? 'outline-8 outline-gray-500' : ''}
                    flex justify-center items-center text-4xl font-bold font-Polys`}>
                        {playerOver.includes(p1Name) ? !(ghochi) ? ((playerOver.indexOf(p1Name)) + 1) !== 1 ? ((playerOver.indexOf(p1Name)) + 1) : <Winico /> : ((playerOver.indexOf(p1Name)) + 1) !== 4 ? <Rip /> : <Winico /> : ''}
                    </div>
                        {totalPlayer > 1 ? <div className={`w-[60px] h-[60px] max-[1200px]:w-[40px] max-[1200px]:h-[40px] bg-green-600 border-[3px] border-gray-800 mt-5 rounded-4xl ${currentPlayer === 2 ? 'outline-8 outline-gray-500' : ''}
                    flex justify-center items-center text-4xl font-bold font-Polys`}>
                            {playerOver.includes(p2Name) ? !(ghochi) ? ((playerOver.indexOf(p2Name)) + 1) !== 1 ? ((playerOver.indexOf(p2Name)) + 1) : <Winico /> : ((playerOver.indexOf(p2Name)) + 1) !== 4 ? <Rip /> : <Winico /> : ''}
                        </div> : ''}
                        {totalPlayer > 2 ? <div className={`w-[60px] h-[60px] max-[1200px]:w-[40px] max-[1200px]:h-[40px] bg-blue-600 border-[3px] border-gray-800 mt-5 rounded-4xl ${currentPlayer === 3 ? 'outline-8 outline-gray-500' : ''}
                    flex justify-center items-center text-4xl font-bold font-Polys`}>
                            {playerOver.includes(p3Name) ? !(ghochi) ? ((playerOver.indexOf(p3Name)) + 1) !== 1 ? ((playerOver.indexOf(p3Name)) + 1) : <Winico /> : ((playerOver.indexOf(p3Name)) + 1) !== 4 ? <Rip /> : <Winico /> : ''}
                        </div> : ''}
                        {totalPlayer > 3 ? <div className={`w-[60px] h-[60px] max-[1200px]:w-[40px] max-[1200px]:h-[40px] bg-red-500 border-[3px] border-gray-800 mt-5 rounded-4xl ${currentPlayer === 4 ? 'outline-8 outline-gray-500' : ''}
                    flex justify-center items-center text-4xl font-bold font-Polys`}>
                            {playerOver.includes(p4Name) ? !(ghochi) ? ((playerOver.indexOf(p4Name)) + 1) !== 1 ? ((playerOver.indexOf(p4Name)) + 1) : <Winico /> : ((playerOver.indexOf(p4Name)) + 1) !== 4 ? <Rip /> : <Winico /> : ''}
                        </div> : ''}</>}

                    {totalPlayer === 3 &&
                        <>
                            <div className={`w-[60px] h-[60px] max-[1200px]:w-[40px] max-[1200px]:h-[40px] bg-amber-300 border-[3px] border-gray-800 mt-5 rounded-4xl ${currentPlayer === 1 ? 'outline-8 outline-gray-500' : ''}
                    flex justify-center items-center text-4xl font-bold font-Polys`}>
                                {playerOver.includes(p1Name) ? !(ghochi) ? ((playerOver.indexOf(p1Name)) + 1) !== 1 ? ((playerOver.indexOf(p1Name)) + 1) : <Winico /> : ((playerOver.indexOf(p1Name)) + 1) !== 3 ? <Rip /> : <Winico /> : ''}
                            </div>
                            {<div className={`w-[60px] h-[60px] max-[1200px]:w-[40px] max-[1200px]:h-[40px] bg-green-600 border-[3px] border-gray-800 mt-5 rounded-4xl ${currentPlayer === 2 ? 'outline-8 outline-gray-500' : ''}
                    flex justify-center items-center text-4xl font-bold font-Polys`}>
                                {playerOver.includes(p2Name) ? !(ghochi) ? ((playerOver.indexOf(p2Name)) + 1) !== 1 ? ((playerOver.indexOf(p2Name)) + 1) : <Winico /> : ((playerOver.indexOf(p2Name)) + 1) !== 3 ? <Rip /> : <Winico /> : ''}
                            </div>}
                            {<div className={`w-[60px] h-[60px] max-[1200px]:w-[40px] max-[1200px]:h-[40px] bg-blue-600 border-[3px] border-gray-800 mt-5 rounded-4xl ${currentPlayer === 3 ? 'outline-8 outline-gray-500' : ''}
                    flex justify-center items-center text-4xl font-bold font-Polys`}>
                                {playerOver.includes(p3Name) ? !(ghochi) ? ((playerOver.indexOf(p3Name)) + 1) !== 1 ? ((playerOver.indexOf(p3Name)) + 1) : <Winico /> : ((playerOver.indexOf(p3Name)) + 1) !== 3 ? <Rip /> : <Winico /> : ''}
                            </div>}
                        </>
                    }
                    {totalPlayer === 2 &&
                        <>
                            <div className={`w-[60px] h-[60px] max-[1200px]:w-[40px] max-[1200px]:h-[40px] bg-amber-300 border-[3px] border-gray-800 mt-5 rounded-4xl ${currentPlayer === 1 ? 'outline-8 outline-gray-500' : ''}
                    flex justify-center items-center text-4xl font-bold font-Polys`}>
                                {playerOver.includes(p1Name) ? !(ghochi) ? ((playerOver.indexOf(p1Name)) + 1) !== 1 ? ((playerOver.indexOf(p1Name)) + 1) : <Winico /> : ((playerOver.indexOf(p1Name)) + 1) !== 2 ? <Rip /> : <Winico /> : ''}
                            </div>
                            {<div className={`w-[60px] h-[60px] max-[1200px]:w-[40px] max-[1200px]:h-[40px] bg-green-600 border-[3px] border-gray-800 mt-5 rounded-4xl ${currentPlayer === 2 ? 'outline-8 outline-gray-500' : ''}
                    flex justify-center items-center text-4xl font-bold font-Polys`}>
                                {playerOver.includes(p2Name) ? !(ghochi) ? ((playerOver.indexOf(p2Name)) + 1) !== 1 ? ((playerOver.indexOf(p2Name)) + 1) : <Winico /> : ((playerOver.indexOf(p2Name)) + 1) !== 2 ? <Rip /> : <Winico /> : ''}
                            </div>}
                        </>
                    }
                    {totalPlayer === 1 &&
                        <>
                            <div className={`w-[60px] h-[60px] max-[1200px]:w-[40px] max-[1200px]:h-[40px] bg-amber-300 border-[3px] border-gray-800 mt-5 rounded-4xl ${currentPlayer === 1 ? 'outline-8 outline-gray-500' : ''}
                    flex justify-center items-center text-4xl font-bold font-Polys`}>
                                {playerOver.includes(p1Name) ? <Winico /> : ''}
                            </div>

                        </>
                    }
                </div>
            </div>
        </div>
    )
}
