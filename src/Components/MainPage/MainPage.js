import React from 'react'
import FirstNews from '../FirstNews/FirstNews.js';
import MoreNews from '../MoreNews/MoreNews.js';
import Header from '../Header/Header.js'
import './styles.css';


const MainPage = (props) => {
   
    const {newsList} = props
    const {newsCategory} = props

    return (
        <>
            <Header newsCategory = {newsCategory}></Header><FirstNews newsList={newsList}/><MoreNews newsList={newsList}/> 
         </>
    )
}

export default MainPage;
