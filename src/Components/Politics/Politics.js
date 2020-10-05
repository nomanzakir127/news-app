import React, { useEffect, useState } from 'react';
import CircularProgressComponent from '../CircularProgress/CircularProgressComponent'
import MainPage from '../MainPage/MainPage'
import ErrorPage from '../ErrorPage/ErrorPage.js';
import Error404 from '../Error404/Error404';

const Politics = (props) => {
   
    const[newsList, setNewsList] = useState({})
    const[progress, setProgress] = useState(0)
    const[conError, setConError] = useState(false)
    

    useEffect( () =>{
        if(navigator.onLine )
        {
            const newsApi = () => {
                fetch('http://newsapi.org/v2/top-headlines?q=politics&apiKey=7ca94d9adb6b406593cd698d101b0ccf')
                .then(response => response.json())
                .then(json => { 
                    if(Object.keys(newsList).length === 0)
                    {
                        setNewsList({...json.articles})
                    }
                }) 
            }
            newsApi()
        }
        else
        {
            setConError(true)
        }
         
    }, [newsList])   

    const progressFuction = (progressVal) =>
    {
        setProgress(progressVal)
    } 
    let newsCategory = 'Politics'
    return (
         <>
            {(progress < 100 && conError === false) && <div className="progress"> <CircularProgressComponent progressFuction = {progressFuction}/></div>}
            {(Object.keys(newsList).length !== 0 && progress >= 100 && conError === false) &&  (<><MainPage newsCategory={newsCategory} newsList={newsList}></MainPage></> )}
            {conError === true && <ErrorPage></ErrorPage>}
            {(Object.keys(newsList).length === 0 && progress >= 100 && conError === false) &&  (<><Error404/></> )}
         </>
    )
}

export default Politics;
