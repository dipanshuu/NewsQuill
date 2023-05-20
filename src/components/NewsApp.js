import React, { useEffect, useRef, useState } from 'react'
import News from './News';
import './NewsApp.css'
export default function NewsApp() {
    const [newsList,setNewsList]=useState([])
    const [query,setQuery]=useState('tesla');
    const apiKey='d9ab20b61e8a4b7785130d213206f3b8';
    const apiUrl=`https://newsapi.org/v2/everything?q=${query}&from=2023-05-19&sortBy=popularity&apiKey=${apiKey}`
    
    const queryInputRef=useRef(null);
    useEffect(()=>{
fetchData();
    },[query])
    async function fetchData(){
try{
    const response=await fetch(apiUrl);
    const jsonData=await response.json();
    setNewsList(jsonData.articles)
}
catch(e){
console.log(e,'error occured');
}
    }
    function handleSubmit(e){
        e.preventDefault()
        const queryValue=queryInputRef.current.value;
        setQuery(queryValue)
    }
  return (
    <div className='news-app'>
        <h1 style={{fontFamily:'cursive',fontSize:'3rem',textAlign:'left',marginBottom:'20px'}}>NewsQuill</h1>
        <form onSubmit={handleSubmit}>
            <input className='query-input' type="text" ref={queryInputRef}/>
            <input className='btn-submit' onClick={handleSubmit} type="submit" value="Search" />
        </form>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,30%)',justifyContent:'space-between',rowGap:'20px'}}>
        {newsList.map(news=>{
            return <News key={news.url} news={news}/>
        })}
    </div>
    </div>
  )
}
