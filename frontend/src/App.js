// App.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter  , Route,Routes, } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import Shop from './Components/Shop/Shop.jsx';
import Contect from './Components/Contect/Contect.jsx';
import Singup from './Components/Signup/Signup.jsx';
import Login from './Components/Login/Login.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Popup from './Components/Popup/Popup.jsx';
import AddProduct from './Components/AddProduct/AddProduct.jsx';
import About from './Components/About us/About.jsx';
import ProductList from './Components/ProductList/ProductList.jsx';
import Frequently from './Components/Pages/Frequently.jsx';
import Private from './Components/Pages/Private.jsx';


import { auth } from './Firebase.jsx';
const App = () => {
  const [isLoggedin,setisLoggedin]=useState("")
  useEffect(()=>{
auth.onAuthStateChanged((user)=>{
  if(user){
    setisLoggedin(user.displayName);

  }else{
    setisLoggedin("");
  }
  console.log(user)
})
  },[])
   return (
    <BrowserRouter>
    
    
  
  <Header />
  
        
      
        <Routes>
        <Route path="/" element={<Singup/>} />
        
       
        <Route path="/home" element={<Home name={isLoggedin} />} />
         <Route path="/Contect" element={<Contect />} />
         <Route path="/About" element={<About />} />
         <Route path="/frequently" element={<Frequently />} />
         <Route path="/private" element={<Private />} />
         <Route path="/AddProduct" element={<AddProduct/>}/>
         <Route path="/ProductList" element={<ProductList/>}/>
         <Route path="/Shop" element={<Shop/>}/>
         <Route path="/Login" element={<Login />} />
         <Route path="/Popup" element={<Popup />} />
         
       
        {/* Add other routes for different pages */}
        </Routes>
      
    
      
   
    <Footer/>
    </BrowserRouter>
  );
};

export default App;

