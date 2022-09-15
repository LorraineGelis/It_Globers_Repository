import React from 'react';
import InstagramProvider from "./components/context/instagramData";
import  Header  from './components/Component_Header/Header';
import Products from './components/Component_Product/Products';
import SocialNetwork from './components/Componente_Social_Networks/SocialNetworks'; 
import  Footer from "./components/Component_Footer/Footer";
import  Copyright from "./components/Componente_Copyright/Copyright";
//import './App.css';


function App() {
    return ( 
      <InstagramProvider>
        <div>
            <Header></Header>
            <Products></Products>
            <SocialNetwork></SocialNetwork> 
            <Footer></Footer>
            <Copyright></Copyright>
        </div>
        </InstagramProvider>  
   
    );
}

export default App;