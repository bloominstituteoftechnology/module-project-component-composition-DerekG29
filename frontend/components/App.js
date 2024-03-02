import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import styled from 'styled-components';
import dummy_data from '../data/dummy_data';

const API_KEY = 'DEMO_KEY';
const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
`

function App() {
  const [apod, setApod] = useState(null);

  useEffect(() => {
    function fetchAPOD() {
      axios.get(URL)
        .then(res => {
          setApod(res.data);
        })
        .catch(err => console.error(err))
    }
    fetchAPOD();
  }, [])

  return (
    <StyledApp>
      <Card apod={apod} />
    </StyledApp>
  )
}

export default App
