import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  h1 {
    text-align: center;
  }
`

function Title({ title, date }) {
  return (
    <StyledTitle>
        <h2>{date}</h2>
        <h1>{title}</h1>
    </StyledTitle>
  )
}

export default Title;