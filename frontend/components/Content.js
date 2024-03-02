import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;

  iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    border: none;
  }
`

function Content({ type, title, url }) {
    return (
      <StyledContent>
        {type === 'video' 
          ? <iframe 
              src={url}
              title={title}
              allowFullScreen
            />
          : <img
              src={url} >
            </img>
        }
      </StyledContent>
    )
}

export default Content;