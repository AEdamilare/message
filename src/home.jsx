import React from 'react'
import { useState } from 'react'
function Home() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [bank, setBank] = useState('')
    const [link, setLink] = useState('')
    const handleSubmit = () => { const encoded = btoa(`${name}|${number}|${bank}`); setLink(`${window.location.origin}/pay?data=${encoded}`) }
    return (
        <div className='p-20 flex flex-col gap-10 items-center justify-center h-screen bg-black'>
            <form action="">
                
                <p className='text-white'>Account Name</p>
                <input className='rounded-2xl bg-white' onChange={(e) => setName(e.target.value)} value={name} type="text" />
                <p className='text-white'>Account Number</p>
                <input className='rounded-2xl bg-white' onChange={(e) => setNumber(e.target.value)} value={number} type="text" />
                <p className='text-white'>Bank Name</p>
                <input className='border-none rounded-2xl bg-white' onChange={(e) => setBank(e.target.value)} value={bank} type="menu" />
                `${name}|${number}|${bank}`
            </form>
            <button className='rounded-2xl bg-[blue] mt- p-1' onClick={handleSubmit}>Generate Link</button>
            {link ? <p className='text-white'>{link}</p> : null}
        </div>
    )
}

export default Home