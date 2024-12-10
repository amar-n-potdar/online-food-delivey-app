import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Applayout from './components/Applayout';
import reportWebVitals from './reportWebVitals';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
//import Grocery from './components/Grocery';
import RestaurantMenu from './components/RestaurantMenu';
import {  Suspense} from 'react';
import Cart from './components/Cart';
const Grocery=React.lazy(()=>{
   return import('./components/Grocery')
}
)
 
const appRouter=createBrowserRouter([
    { path:'/',
      element:<Applayout/>,
      children:[
        {
            path:'/',
            element:<Body/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/contact',
            element:<Contact/>
        },
        {
            path:'/grocery',
            element:<Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>
        },
        {
            path:'/restaurant/:resId',
            element:<RestaurantMenu/>
        },
        {
            path:'/cart',
            element:<Cart/>
        }
      ],
      errorElement:<Error/>
    },
    
])



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
reportWebVitals();
