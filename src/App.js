import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter, Route, Routes, Outlet} from 'react-router-dom';



import Footer from './Footer';

import Header from './Header';






const App = () => {
    const [count, setCount] = useState(1);
    const [color, setColor] = useState(false);
    const [enabled, setEnabled] = useState(false);
    const increment = () => { setCount(count*5);
    setColor(!color) };
    
    
    return (<div className='flex flex-col m-0 p-0 min-h-screen  box-border'>
    

  
<Header enabled={enabled} setEnabled={setEnabled}/>
      
      
      
      <Outlet/>
      
      <Footer/>

      
      
      
      
      
      </div>
    )

  
};



   




export default App;
