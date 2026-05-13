import React from 'react'
import LocateBtn from './LocateBtn'

export default function About() {
  return (
    <div className='w-[100vw] h-fit flex justify-center items-center'>
      <div className='max-[1170px]:hidden'>
        <LocateBtn text='Back' size={30} corner={true} />
      </div>
      <div className='w-[80vw] max-w-[900px] min-h-fit bg-[#000000c9] border-4 border-emerald-400 rounded-[25px] p-8 text-white shadow-[0px_0px_25px_#00ff99] flex flex-col gap-6 max-[500px]:w-[100vw] '>
        <div className='hidden max-[1170px]:block'>
          <LocateBtn text='Back' size={30} hover={1} />
        </div>
        <h1 className='text-[55px] font-black text-emerald-400 tracking-wide'>
          About Me
        </h1>

        <div className='w-full h-[3px] bg-emerald-400 rounded-full'></div>

        <p className='text-[22px] leading-[40px] text-gray-200'>
          Hey! I'm <span className='text-emerald-400 font-bold'>Kirtan Saini</span>,
          a passionate React Frontend Developer and game creator from Rajasthan, India.
          I love building modern web interfaces, interactive experiences, and unique games
          using technologies like React, Tailwind CSS, JavaScript, Unity3D, and C#.
        </p>

        <p className='text-[22px] leading-[40px] text-gray-200'>
          One of my original creations is a unique multiplayer game called
          <span className='text-pink-400 font-bold'> "Ghochiii"</span>.
          It is a special mix of number guessing and number avoiding mechanics,
          designed completely from my own imagination and not copied from any existing game.
        </p>

        <div className='bg-[#111111] border-3 border-pink-500 rounded-[20px] p-5 flex flex-col gap-4'>

          <h2 className='text-[35px] font-bold text-pink-400'>
            About Ghochiii
          </h2>

          <ul className='text-[21px] leading-[38px] text-gray-200 list-disc pl-8'>
            <li>Supports 1, 2, 3, or 4 players.</li>
            <li>Players must guess numbers smartly while avoiding dangerous numbers.</li>
            <li>Includes strategic thinking and prediction mechanics.</li>
            <li>Features multiplayer competition and survival gameplay.</li>
            <li>Built with React and designed with a modern game-style UI.</li>
            <li>Contains custom gameplay ideas created by me, Kirtan Saini.</li>
          </ul>

        </div>

        <div className='flex gap-4 flex-wrap mt-3'>

          <div className='px-5 py-2 bg-emerald-500 rounded-full text-[18px] font-bold text-black'>
            React
          </div>

          <div className='px-5 py-2 bg-cyan-400 rounded-full text-[18px] font-bold text-black'>
            Tailwind CSS
          </div>

          <div className='px-5 py-2 bg-yellow-300 rounded-full text-[18px] font-bold text-black'>
            JavaScript
          </div>

          <div className='px-5 py-2 bg-purple-400 rounded-full text-[18px] font-bold text-black'>
            Unity3D
          </div>

          <div className='px-5 py-2 bg-pink-400 rounded-full text-[18px] font-bold text-black'>
            C#
          </div>

        </div>

      </div>
    </div>
  )
}
