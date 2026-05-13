import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LocateBtn({
  location = '/',
  text = 'Back',
  colorss = 'pink',
  corner = false,
  size = 20,
  hover = 0,
  refresh = false,
  func = null
}) {

  const navigate = useNavigate()

  const colors = {
    pink: 'bg-pink-600 border-pink-900',
    blue: 'bg-blue-600 border-blue-900',
    red: 'bg-red-600 border-red-900',
    green: 'bg-green-600 border-green-900',
    purple: 'bg-purple-600 border-purple-900',
  }

  return (
    <button
      className={`w-fit h-fit px-2.5 py-0.5 text-white font-bold ${size < 30 ? 'text-[20px]' : size < 35 ? 'text-[30px]' : size < 40 ? 'text-[35px]' : 'text-[40px]'}
      ${corner ? 'absolute top-5 left-5' : ''} border-6 rounded-[10px]
      cursor-pointer hover:outline-2 ${hover === 0 ? 'outline-black' : 'outline-white'}
      ${colors[colorss]}`}
      onClick={() => (func ? func() : (refresh ? window.location.reload() : navigate(`/${location}`)))}
    >
      {text}
    </button>
  )
}