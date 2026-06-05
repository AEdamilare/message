import React from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
function Text() {
    const [size, setSize] = useState(100)
    const [no, setNo] = useState(100)
    const [yes, setYes] = useState(false)
    const [searchParams] = useSearchParams()
    const encoded = searchParams.get('data')
    const decoded = atob(encoded)
    const [name, number, bank] = decoded.split('|')
    return (
        <div className='p-20 flex flex-col gap-10 items-center justify-center h-screen bg-black'>
            {yes && <div className='text-white' >
                <p>Name: {name}</p>
                <p>Account: {number}</p>
                <p>Bank: {bank}</p>
            </div>}
            <div className='text-white'></div>
            <div className=' flex gap-8'>
                <button className='bg-[blue]  text-white cursor-pointer ' style={{ width: size + "px", height: size + "px" }} onClick={() => setYes(true)}> Yes </button>
                <button className='bg-[blue]  text-white cursor-pointer' style={{ width: no + "px", height: no + "px", fontSize: no / 5 + "px" }} onClick={() => { setSize(size + 10); setNo(no - 5) }}> No! </button>
            </div>
        </div>
    )
}

export default Text