import React from 'react';
import Content from './Content';
import Title from './Title'
import Description from './Description';

import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50em;
  background-color: #f5f5f5;
  margin: 1.5rem;
  padding: 1rem; 
  border-radius: 12px;
  box-shadow: 
    5px 5px 5px lightgrey,
    -1px -1px 5px lightgrey;
`

function Card({ apod }) {

  if (!apod) {
    return (
      <StyledCard>
        <h2>Fetching photo of the day...</h2>
      </StyledCard>
    )
  }

  
  return (
    <StyledCard>
      <Title title={apod.title} date={apod.date} />
      <Content type={apod.media_type} title={apod.title} url={apod.url} />
      <Description explanation={apod.explanation} />
    </StyledCard>
  )
}

export default Card;