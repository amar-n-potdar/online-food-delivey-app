import React from "react";
//import ReactDOM from 'react-dom/client';
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import { createBrowserRouter ,Outlet,RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appstore from "../constants/appstore";
const Applayout=()=>{
  return(
    <Provider store={appstore}>
    <div className='app'>
      <Header/>
      <Outlet/>
    </div>
    </Provider>
  )}
 
export default Applayout;










