import React from 'react';
import './App.css';
import AllNews from './Components/AllNews/AllNews';
import {Routes,Route} from 'react-router-dom'
import MyProvider from './Components/MyProvider/MyProvider'
import Politics from './Components/Politics/Politics';
import Bussiness from './Components/Bussiness/Bussiness';
import Sports from './Components/Sports/Sports';
import Science from './Components/Science/Science';

function App() {
  return (
    <>
      <MyProvider>
        <Routes>
          <Route path='/' element={<AllNews />}></Route>
          <Route path='/headlines' element={<AllNews />}></Route>
          <Route path='/politics' element={<Politics />}></Route>
          <Route path='/bussiness' element={<Bussiness />}></Route>
          <Route path='/sports' element={<Sports />}></Route>
          <Route path='/science' element={<Science/>}></Route>
        </Routes>
      </MyProvider>
    </>
  );
}

export default App;
