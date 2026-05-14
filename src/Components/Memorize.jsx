import React, { useEffect, useState } from 'react'
import { useGlobal } from '../Context/UserContext';

export default function Memorize() {
    const [count, setCount] = useState(10);
    const { memorize } = useGlobal()

    useEffect(() => {
        let intervalId;
        intervalId = setInterval(() => {
            setCount((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className='w-[100vw] h-[100vh] bg-[#ffffff00] absolute top-0 left-0 flex justify-center items-center'>
            <h1 className='text-[300px] font-Polys font-bold select-none text-[#0000006a]'>{count}</h1>
        </div>
    )
}
