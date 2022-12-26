import React from 'react'
import axios from 'axios'
import {useState} from 'react'

export default function StoryHooks() {
    const [icons, setIcons] = useState([])


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

    async function getIcons(){
        axios.defaults.headers.common['X-CSRFToken'] = getCookie('csrftoken')
        let response = await axios.get('api/get_icons/')
        console.log(response)
        let iconList = [response.data.icons.url0, response.data.icons.url1, response.data.icons.url2]
        setIcons(iconList)
}

    const showIcons = icons.map(icon =>
        <img src={icon}></img>)

  return (
    <div>
      <h4>Noun Project Icons as storytellers dice here</h4>
      <button onClick={getIcons}>Generate Story Hooks</button>
      <div>{showIcons}</div>
    </div>
  )
}
