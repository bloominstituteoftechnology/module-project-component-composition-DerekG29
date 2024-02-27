import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Display from './Display';

const API_KEY = 'DEMO_KEY';
const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    function fetchAPOD() {
      axios.get(URL)
        .then(res => {
          setData(res.data);
        })
        .catch(err => console.error(err))
    }
    fetchAPOD();
  }, [])

  if (!data) return <h2>Fetching Photo of the day...</h2>

  return (
    <Display
      date={data.date}
      desc={data.explanation}
      title={data.title}
      url={data.url}
      type={data.media_type}
    />
  )
}

export default App
