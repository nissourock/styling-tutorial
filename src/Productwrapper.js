 import React , {useState, useEffect} from 'react';

 import axios from 'axios';
 import Product from './Product'
 import Formwrapper from './Formwrapper';
 import './Productwrapper.css'
 import { AnimationOnScroll } from 'react-animation-on-scroll';
 import Select from 'react-select';
 import {useQuery} from 'react-query'
 


 const Productwrapper = () => { 
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [toggle, setToggle]= useState(false);
    const [openMenu, setopenMenu] = useState(false);
    //const [options, setOptions] = useState([]);
    let options = []
      
    

    
  const fetchProducts = async () => { 
      const newproducts = await  axios.get('https://dummyjson.com/products');
     
      let newproductdata = newproducts.data.products; 
      //newproductdata = [...newproductdata, newproductdata]
      //newproductdata.push({
      //  console.log(newproductdata);
      //  item : "blood", price : "$23", image : "https://pics.me.me/no-talk-with-me-am-angry-62511729.png"
      //});
      setProducts(newproductdata);
      console.log(newproductdata);
      setLoading(!loading);
      
      
          
      return (products);    
     
     
     };

  const mapOptions = () => {
        
      options =    products.map(product => 
         ({ value: product.title, label: product.title }))
           return (options)
         }
         const handleInputChange = (query, { action }) => {
          if (action === "input-change") {
              this.setState({ openMenu: true });
          }
        const  hideMenu = () => {
            this.setState({ openMenu: false });
        };
      };
   
    
    
    
 
    useEffect(() => {
        
            fetchProducts(); 
            
            
            
            
            

    
      
      
      
    },[]);

    mapOptions();
    console.log((mapOptions()))   
         
           

   if (loading) { return (<div class="min-h-screen flex justify-center items-start p-12 bg-rose-100">

   <div class="loader bg-rose-100 p-5 rounded-full flex space-x-3">
     <div class="w-5 h-5 bg-rose-400 rounded-full animate-bounce"></div>
     <div class="w-5 h-5 bg-rose-500 rounded-full animate-bounce"></div>
     <div class="w-5 h-5 bg-rose-600 rounded-full animate-bounce"></div>
     
   </div>
   
   

 </div>)
       
   } else {
     
  const  handleInputChange = (query, { action }) => {
      if (action === "input-change" && query.length >= 3) {
          setopenMenu({ openMenu: true });
      }
      
  };
  const hideMenu = () => {
    setopenMenu({ openMenu: false });
};
    return (
 
        <>
        
        <div class="bg-rose-100 text-white p-10 " >
       
            <span class='ml-20 text-6xl font-thin text-gray-600'>Products </span>
            <div class='p-6 mt-6 bg-current w-2/4 justify-center'>
        
        <Select 
         
         onInputChange={this.handleInputChange}
         onChange={this.hideMenu}
         onBlur={this.hideMenu}
        
        
        options={options}
        menuIsOpen={openMenu}

       />
        </div>
        </div>
        
        
   <div class="bg-rose-100   bg-fixed p-10  lg:grid lg:grid-cols-4 lg:gap-6 sd:grid-cols-2 sd:gap-16  sd:mt-10 ">
   <button class='text-white bg-rose-400 hover:bg-rose-400 focus:ring-4 focus:ring-rose-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-rose-500 dark:focus:ring-rose-800' onClick={()=>setToggle(!toggle)}>Add products</button>
   {toggle &&
               (<div class='row-span-2 col-span-3'><Formwrapper products={products} setProducts={setProducts}/></div>)
   }
           {products.map((product, i) => ( 
               <AnimationOnScroll animateIn="animate__zoomIn" animatePreScroll="true" animateOnce='true'>

               <Product key={i} product={product.title} productid={product.id} price={product.price} imagelink={product.thumbnail} isSold={"Add to cart"} theproduct={product}/>
              </AnimationOnScroll>
           ))}
             
           {/* <Second lol={count} color={color}  onClick={increment}/> */}
           
           </div>
           
            
           </>
        )






   }

    
  };


  
  export default Productwrapper