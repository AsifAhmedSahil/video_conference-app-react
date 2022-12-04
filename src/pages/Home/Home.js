import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [ roomcode,setRoomCode] = useState("")
    const navigate = useNavigate();

    const handleForm = (e) =>{
        e.preventDefault();
        navigate(`/room/${roomcode}`)

    }
  return (
    <div className='home-page'>
        <form onSubmit={handleForm} className='form'>
            <div>
                <label htmlFor="">Enter Room Code</label>
                <input type="text" value={roomcode} onChange={e => setRoomCode(e.target.value)} required placeholder='Enter Room Code' />
            </div>
            <button type='submit'>
                Enter Room

            </button>
        </form>
        
    </div>
  )
}

export default Home