import React from 'react'

function Display({ date, desc, title, url, type }) {
  return (
    <div>
      <h2>{title} - {date}</h2>
      <div>
        {type === "video"
          ? <iframe
            width="853"
            height="480"
            src={url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
            title={title}
          />
          : <img
            src={url}
          />
        }
      </div>
      <p>{desc}</p>
    </div>
  )
}

export default Display;