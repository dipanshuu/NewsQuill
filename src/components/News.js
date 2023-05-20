import React from 'react'
import './News.css'
export default function News({news}) {
  return (
    <div className='news-Card'>
        <img src={news.urlToImage} alt={news.title} />
        <h2>{news.title}</h2>
        <p>{news.description}</p>
        <button className="btn-read-more" onClick={()=>window.open(news.url)}>Read More</button>
    </div>
  )
}
