import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About'
import Contact from './Contact';
import Checkout from './Checkout'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {ReactQueryDevtools} from 'react-query/devtools'

import './index.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Productview from './Productview';
import { QueryClient, QueryClientProvider } from "react-query";
import reportWebVitals from './reportWebVitals';
import Productwrapper from './Productwrapper';
import Productwrapper2 from './Productwrapper2';
import Productwrapper3 from './Productwrapper3';
import Blog from './Blog';

import Home from './Home';
import { Provider } from "react-redux"


import { store } from "./store/state"
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
const queryClient = new QueryClient();


const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>

            <Route path='/' element={<App />} >
              <Route path='/productview/:id' element={<Productview />} />
              <Route path='/products2' element={<Productwrapper2 />} />
              <Route path='/products3' element={<Productwrapper3 />} />
              <Route path='/products' element={<Productwrapper />} />
              <Route path='/home' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/blog' element={<Blog/>}/>
            </Route>

          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      <ReactQueryDevtools position='bottom-right' initialIsOpen={false}/>
    </QueryClientProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
