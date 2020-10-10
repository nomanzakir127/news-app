import React, { useCallback, useEffect, useState } from 'react';
import CircularProgressComponent from '../CircularProgress/CircularProgressComponent'
import MainPage from '../MainPage/MainPage'
import ErrorPage from '../ErrorPage/ErrorPage.js';
import Error404 from '../Error404/Error404'

const AllNews = (props) => {
   
    const[newsList, setNewsList] = useState({})
    const[progress, setProgress] = useState(0)
    const[conError, setConError] = useState(false)
    
   var newDate = new Date()
   var month = Number(newDate.getMonth()) + 1
   var todayStr = newDate.getFullYear() + "-" + month + "-" + newDate.getDate()

   var yesterday = new Date()
   yesterday.setDate(yesterday.getDate() - 1)

   var yMonth = Number(yesterday.getMonth()) + 1
   var yesterdayStr = yesterday.getFullYear() + "-" + yMonth + "-" + yesterday.getDate()
   var url = 'https://newsapi.org/v2/everything?q=politics&from='+yesterdayStr+'&to='+todayStr+'&sortBy=popularity&apiKey=7ca94d9adb6b406593cd698d101b0ccf'
   
   const newsApi = useCallback(() => {
    fetch(url)
    .then(response => response.json())
    .then(json => { 
        setNewsList({...json.articles})
    }) 
}, [url])

    useEffect( () =>{
        if(navigator.onLine )
        {
            newsApi()
        }
        else
        {
            setConError(true)
        }
         
    }, [newsApi])   

    const progressFuction = (progressVal) =>
    {
        setProgress(progressVal)
    } 

    let newsCategory = 'All News'
    
    return (
         <>
            {(progress < 100 && conError === false) && <div className="progress"> <CircularProgressComponent progressFuction = {progressFuction}/></div>}
            {(Object.keys(newsList).length !== 0 && progress >= 100 && conError === false) &&  (<><MainPage newsCategory={newsCategory} newsList={newsList}></MainPage></> )}
            {conError === true && <ErrorPage></ErrorPage>}
            {(Object.keys(newsList).length === 0 && progress >= 100 && conError === false) &&  (<><Error404></Error404></> )}

         </>
    )
}

export default AllNews;
