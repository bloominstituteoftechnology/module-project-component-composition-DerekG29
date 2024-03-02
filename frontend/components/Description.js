import React from "react";
import styled from "styled-components";

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

function Description({ explanation }) {
  return (
    <StyledDescription>
      <p>{explanation}</p>
    </StyledDescription>
  )
}

export default Description;