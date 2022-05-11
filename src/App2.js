import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


import Second from './Second';

import Footer from './Footer';
import Form from './Form';
import Header from './Header';
import Formwrapper from './Formwrapper';
import Productwrapper from './Productwrapper';
import Products from './Products';





const App = () => {
    const [count, setCount] = useState(1);
    const [color, setColor] = useState(false);
    const [enabled, setEnabled] = useState(false);
    const increment = () => { setCount(count*5);
    setColor(!color) };
    const [products, setProducts] = useState([]);
    
    
    

    
  const fetchProducts = async () => { 
      const newproducts = await  axios.get('https://dummyjson.com/products');
     
      let newproductdata = newproducts.data.products; 
      //newproductdata.push({
      //  console.log(newproductdata);
      //  item : "blood", price : "$23", image : "https://pics.me.me/no-talk-with-me-am-angry-62511729.png"
      //});
      setProducts(newproductdata);
      console.log(products);
      
     };

  
    
    
 
    useEffect(() => {
      fetchProducts();
      
      
      
    }, []);
    
    return (<>

<Header enabled={enabled} setEnabled={setEnabled}/>
      
      <Formwrapper products={products} setProducts={setProducts}/> 
      <Productwrapper products={products}/>
      <Footer/>
      
     
      
       
      
      </>
    )

    
};



   




export default App;
