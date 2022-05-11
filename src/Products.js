import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Productwrapper from './Productwrapper';





const Products = ({products}) => {
    return (
        <div>
            <Header/>
            <Productwrapper products={products}/>
            <Footer/>
        </div>
    );
}

export default Products;

