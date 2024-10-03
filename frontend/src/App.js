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
import Home2 from './Components/Pages/Home2.jsx';
import Home3 from './Components/Pages/Home3.jsx';
import Home4 from './Components/Pages/Home4.jsx';
import NotFound from './Components/Pages/NotFound.jsx';
import Delivery from './Components/Pages/Delivery.jsx';
import Term from './Components/Pages/Term.jsx';
import Return from './Components/Pages/Return.jsx';
import MyAccount from './Components/Pages/MyAccount.jsx';
import Wish from './Components/Pages/Wish.jsx';
import Policy from './Components/Pages/Policy.jsx';
import Faq from './Components/Pages/Faq.jsx';
import Decorative from './Components/Pages/Decorative.jsx';
import Kitchen from './Components/Pages/Kitchen.jsx';
import Chairs from './Components/Pages/Chairs.jsx';
import Interior from './Components/Pages/Interior.jsx';
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
        <Route path="/home2" element={<Home2 />} />
         <Route path="/home3" element={<Home3 />} />
         <Route path="/home4" element={<Home4 />} />
         <Route path="/Contect" element={<Contect />} />
         <Route path="/About" element={<About />} />
         <Route path="/frequently" element={<Frequently />} />
         <Route path="/notfound" element={<NotFound />} />
         <Route path="/private" element={<Private />} />
         <Route path="/AddProduct" element={<AddProduct/>}/>
         <Route path="/ProductList" element={<ProductList/>}/>
         <Route path="/Shop" element={<Shop/>}/>
         <Route path="/Login" element={<Login />} />
         <Route path="/Popup" element={<Popup />} />

         {/* FOOTER */}

         <Route path="/delivery" element={<Delivery/>} />
         <Route path="/terms" element={<Term/>} />
         <Route path="/returns" element={<Return/>} />
         <Route path="/Contact" element={<Contect />} />
         <Route path="/my-account" element={<MyAccount />} />
         <Route path="/wishlist" element={<Wish />} />
         <Route path="/privacy-policy" element={<Policy />} />
         <Route path="/faq" element={<Faq />} />
         <Route path="/faq" element={<Faq />} />
         <Route path="/decorative" element={<Decorative />} />
         <Route path="/kitchen" element={<Kitchen />} />
         <Route path="/chairs" element={<Chairs />} />
         <Route path="/interior" element={<Interior />} />


         
       
        {/* Add other routes for different pages */}
        </Routes>
      
    
      
   
    <Footer/>
    </BrowserRouter>
  );
};

export default App;

