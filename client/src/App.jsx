import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import AppNav from './components/AppNav'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignIn from './pages/SignIn'


function App() {
  const [spell, setSpell] = useState('')
  const [spellDetail, setSpellDetail] = useState('')
  const [user, setUser] = useState(null)

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
  let username = 'kevin_test4'
  let password = 'passwordtest4'
  let myResponse = await axios.post('signIn/',{
    'username': username,
    'password': password
  })
  curr_user()
  console.log(myResponse.data)
}
const signUp = async () => {
  axios.defaults.headers.common['X-CSRFToken'] = getCookie('csrftoken')
  let email = 'testemail@testemail.com'
  let username = 'kevin_test4'
  let password = 'passwordtest4'
  let myResponse = await axios.post('signUp/', {
    'email':email,
    'password':password,
    'username':username
  })
  console.log(myResponse.data)
}
const signOut = async () => {
  axios.defaults.headers.common['X-CSRFToken'] = getCookie('csrftoken')
  let myResponse = await axios.post('signOut/')
  curr_user()
  console.log(myResponse.data)
}

  //! getSpell function makes api call and returns the Name of one spell selected at random.
  async function getSpell(){
    let randomNumber = Math.floor(Math.random()*320)
    try {
    const response = await axios.get('https://www.dnd5eapi.co/api/spells/')
    console.log(response);
    setSpell(response.data.results[randomNumber].name)
    } catch (error) {
      console.error(error);
    }

  }


  const curr_user = async () => {
    let myResponse = await axios.get('current_user/')
    let user = myResponse.data && myResponse.data[0] && myResponse.data[0].fields
    setUser(user)
  }

  useEffect(() => {
    curr_user()
  },[])

  return (
    <div className="App">
      <AppNav />
      <div className="card">
        <button onClick={getSpell}>
          Get Spell
        </button>
        {user && <h1>{user.username}</h1>}
        <button onClick={signIn}>Sign In</button>
        <button onClick={signOut}>Sign Out</button>
        <button onClick={signUp}>Sign Up</button>
        <h3>{spell}</h3>
        <p>{spellDetail}</p>
      </div>
      {/* <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='signIn/' element={<SignIn />} />
        </Routes>
      </Router> */}
    </div>
  )
}

export default App
