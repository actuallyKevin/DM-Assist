import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function SignUp() {
    const [signUpLoading, setSignUpLoading] = useState(false)

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

    useEffect(() =>{
        if (signUpLoading){
            signUp()
        }
    }, [signUpLoading])
    const signUp = async () => {
        axios.defaults.headers.common['X-CSRFToken'] = getCookie('csrftoken')
        let email = document.getElementById("email_up").value
        let username = document.getElementById("username_up").value
        let password = document.getElementById("password_up").value
        let passCheck = document.getElementById("password_up2").value
        if (password == passCheck){
        let myResponse = await axios.post('signUp/', {
          'email':email,
          'password':password,
          'username':username
        })
        setSignUpLoading(false)
        console.log(myResponse.data)
        }else{
            alert("Your password inputs do not match.")
        }
      }

  return (
    <div>
      <form>
        <input type="text" id="username_up" placeholder="desired username"></input>
        <input type="email" id="email_up" placeholder="email"></input>
        <input type="password" id="password_up" placeholder="password"></input>
        <input type="password" id="password_up2" placeholder="password again"></input>
        <button onClick={(e) => {
        e.preventDefault()
        setSignUpLoading(true)
        }}>Submit</button>
      </form>
    </div>
  )
}
