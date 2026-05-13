import React from 'react'
import '../assets/style.css'
import { useGlobal } from '../Context/UserContext'

export default function RightBoard() {

    const {
        currentPlayer,
        players,
        playerOver,
        totalPlayer,
        ghochi
    } = useGlobal();

    const remainPlayers = players.filter(
        player => !playerOver.includes(player)
    );

    return (

        <div className='block w-fit justify-items-center align-middle max-[600px]:flex'>

            <div className='w-fit text-3xl max-[1200px]:text-[18px] bg-gradient-to-b from-cyan-300 p-2.5 border-4 border-cyan-500 
            border-b-0 outline-2 max-[600px]:w-[50vw] max-[1200px]:w-[200px]'>

                <h1 className='font-bold text-gray-600'>
                    Turn
                </h1>

                <hr />

                <h1 className='w-[250px] overflow-x-auto overflow-y-hidden h-fit'>
                    Player {currentPlayer} :
                    <span className='font-bold'>
                        {players[(currentPlayer - 1)]}
                    </span>
                </h1>

            </div>


            <div className='text-center w-[270px] mt-10 text-3xl font-Polys font-bold bg-gradient-to-t
             from-emerald-200 border-emerald-600 border-4 border-t-0 outline-2 max-[600px]:w-[50vw] max-[1200px]:text-[18px] max-[1200px]:w-[200px]'>

                {playerOver[0]
                    ? !(ghochi) ? <h1>{`${playerOver[0]} is 1st Winner`}</h1>
                        : <h1>{`${playerOver[0]} is Dead`}</h1>
                    : ' '
                }

                {playerOver[1]
                    ? !(ghochi) ? <h1>
                        {
                            totalPlayer > 2
                                ? `${playerOver[1]} is 2nd Winner`
                                : `${playerOver[1]} is Looser`
                        }
                    </h1>
                        : totalPlayer < 3 ? <h1>{`${playerOver[1]} Got Life`}</h1> : <h1>{`${playerOver[1]} is Dead`}</h1>
                    : ' '
                }

                {playerOver[2]
                    ? !(ghochi) ? <h1>
                        {
                            totalPlayer > 3
                                ? `${playerOver[2]} is 3rd Winner`
                                : `${playerOver[2]} is Looser`
                        }
                    </h1>
                        : totalPlayer < 4 ? <h1>{`${playerOver[2]} Got Life`}</h1> : <h1>{`${playerOver[2]} is Dead`}</h1>
                    : ' '
                }

                {playerOver[3]
                    ? !(ghochi) ? <h1>{playerOver[3]} is Looser</h1>
                        : <h1>{playerOver[3]} Got Life</h1>
                    : ' '
                }

            </div>
        </div>
    )
}