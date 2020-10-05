import React, {useState} from 'react'
import MyContext from '../MyContext/MyContext'
import {useNavigate} from 'react-router-dom'

export default function MyProvider(props){
    const[index, setIndex] = useState(0)

    let navigate = useNavigate()
    const setNewsIndex = (i)=>{
        setIndex(i)
        window.scrollTo(10, 20);
    }

    const setNavigatorPage = (name) => {
        navigate('/' + name)
    }

    return (
        <MyContext.Provider value={{index: index, setNewsIndex: setNewsIndex, setNavigatorPage:setNavigatorPage}}>{props.children}</MyContext.Provider>
    )
}
