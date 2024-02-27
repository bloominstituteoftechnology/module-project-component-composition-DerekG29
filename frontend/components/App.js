import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Display from './Display';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setData(res.data);
      }).catch(err => { console.error(err) });
  }, []);

  return (
    <div className='container'>
      {
        data && <Display date={data.date} desc={data.explanation} title={data.title} url={data.url} type={data.media_type} />
      }
    </div>
  )
}

export default App
