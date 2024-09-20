//use this article to revisit react routing 
// https://reactrouter.com/en/main/routers/create-browser-router


import './App.css';
// import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path: "/about",
    element: <div>
    <Navbar/>
    <About/>
  </div>
  },
  {
    path: "/dashboard",
    element: <div>
    <Navbar/>
    <Dashboard/>
  </div>
  },
  {
    path: "/contact",
    element: <div>
    <Navbar/>
    <Contact/>
  </div>
  }
]);

function App() {
  return (
    <>
      {/* <h1>Hello Duniya!</h1> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App;
