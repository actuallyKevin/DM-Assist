import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Routes, Route, Link} from "react-router-dom"
import Home from '/src/pages/Home'
import SignIn from '/src/pages/SignIn'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

export default function AppNav() {
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

    const signOut = async () => {
        axios.defaults.headers.common['X-CSRFToken'] = getCookie('csrftoken')
        let myResponse = await axios.post('signOut/')
        console.log(myResponse.data)
      }

  return (
    <div class='sticky-top'>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">DM Assist</Navbar.Brand>
          <Nav>
            <Nav.Link><Link to='/signin'>Sign In</Link></Nav.Link>
            <Nav.Link><Link to='/treasure-gen'>Treasure Generator</Link></Nav.Link>
            <Nav.Link><Link to='/spells'>Spells</Link> </Nav.Link>
            <Nav.Link><Link to='/story-hooks'>Story Prompts</Link></Nav.Link>
          </Nav>
          <button onClick={signOut}>Log Out</button>
        </Container>
      </Navbar>
      
      <br />
    </div>
  )
  }