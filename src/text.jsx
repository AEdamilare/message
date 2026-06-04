import React from 'react'
import { useState } from 'react'
function Text() {
    const [size, setSize] = useState(100)
    const [no, setNo] = useState(150)
    const [yes, setYes] = useState("")
    return (
        <div className=''>
            <div className='text-white'>{yes}</div>  
            <div className='text-white'></div>
            <div className=' flex gap-8'>
                <button className='bg-[blue] cursor-pointer ' style={{ fontSize: size + "px" }} onClick={() => setYes("yaaaaahhhhh")}> Yes </button>
                <button className='bg-[blue] cursor-pointer' style={{ fontSize: no + "px" }} onClick={() => { setSize(size + 10), setNo(no - 5) }}> No! </button>
            </div>
        </div>
    )
}

export default Text