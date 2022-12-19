import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

export default function SignIn() {
    console.log('we in signIn')
    const [logInLoading, setLogInLoading] = useState(false)

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');
    axios.defaults.headers.common["X-CSRFToken"]=csrftoken
    
    const signIn = async () => {
      axios.defaults.headers.common['X-CSRFToken'] = getCookie('csrftoken')
      let username = document.getElementById("username_in").value
      let password = document.getElementById("password_in").value
      console.log('\n\n\n\n')
      console.log(username, password)
      let myResponse = await axios.post('/api/signIn/',{
        'username': username,
        'password': password
      })
    //   curr_user()
      console.log(myResponse.data)
      setLogInLoading(false)
    }

    useEffect(() => {
        if (logInLoading){
            console.log('log-in-loading')
            signIn()
        }
    }, [logInLoading])


    const signOut = async () => {
      axios.defaults.headers.common['X-CSRFToken'] = getCookie('csrftoken')
      let myResponse = await axios.post('signOut/')
      curr_user()
      console.log(myResponse.data)
    }
  return (
    <div>
        <p>Don't have an account? <Link to={"/signup"}>Sign Up!</Link></p>
      <form>
        <input type="text" id="username_in" placeholder="Username"></input>
        <input type="text" id="password_in" placeholder="Password"></input>
        {/* change input type to PASSWORD */}
        <button onClick={(e)=> { 
        e.preventDefault()
        setLogInLoading(true)
        }}>Submit</button>
      </form>
    </div>
  )
}
