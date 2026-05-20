import React from 'react'
import LocateBtn from './LocateBtn'

export default function Home() {
    return (
        <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
            <div className='w-[600px] h-[100vh] flex flex-col justify-center items-center bg-[#0000007e]'>
                <h1 className='text-white text-6xl font-SupplyCenter bg-[#000000d4] 
                w-fit rounded-2xl p-[10px]'>Ghochiii</h1>

                <div className='bg-[#000000d4] w-fit h-fit mt-[50px] text-center p-[10px] rounded-[10px]'>
                    <LocateBtn colorss='green' text='Play' size={40} hover={1} location='setting' />
                    <div className='mt-[30px]'>
                        <LocateBtn colorss='green' text='About' size={30} hover={1} location='about' />
                    </div>
                </div>
            </div>
            <h1 className='text-white absolute bottom-5 font-Polys'>@BOBSUN-GAMES-STUDIO</h1>
        </div>
    )
}