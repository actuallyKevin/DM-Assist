import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import logo from '../assets/d20.jpg'


export default function Home() {
    const [user, setUser] = useState('stranger')

    const curr_user = async () => {
      let myResponse = await axios.get('current_user/')
      let user = myResponse.data && myResponse.data[0] && myResponse.data[0].fields
      setUser(user.username)
    }
  
    useEffect(() => {
      curr_user()
    },[user])


  return (
    <div>
        <h5>Welcome {user}!</h5>
      <img src={logo} alt='d20'></img>
      <p>This application is here to simplify planning and running D&D 5e adventures.</p>
    </div>
  )
}
