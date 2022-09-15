

//const token ='IGQVJYNGtTdHdlV19kQzBXSmlFTWdxLS1KVVpWTzdReDJzZAkZA5QkNhTmpNZAl9HU05KbjdZASWprY2xDa0JDQ3N5YmkwOXBFWU1JUFBZAUzNIRDZAMWnFuY3RGRWwtY2gyMWItX1MwRTN4UGQ5ODFjOHluWQZDZD'
/*Creamos el context*/

//export const InstagramContext = createContext();

/*Creamos al proveedor*/

/* const InstagramProvider = (props) => {
    const [photos, setPhotos] = useState([]);

    useEffect( () => {

        const peticionApi = async() => {
            const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,media_url,thumbnail_url,permalink&access_token=${token}`);
            setPhotos(response.data);
        }

        peticionApi();

    },[])

    return(
        <InstagramContext.Provider value = {{photos}}>    
        {props.childen} </InstagramContext.Provider >    )
  
}

export default InstagramProvider; */

import { createContext, useEffect, useState } from "react";
import axios from "axios";

/*Creamos una variable para giardar el token de instagram*/

const token = 'IGQVJYNGtTdHdlV19kQzBXSmlFTWdxLS1KVVpWTzdReDJzZAkZA5QkNhTmpNZAl9HU05KbjdZASWprY2xDa0JDQ3N5YmkwOXBFWU1JUFBZAUzNIRDZAMWnFuY3RGRWwtY2gyMWItX1MwRTN4UGQ5ODFjOHluWQZDZD';

/**Creamos el contexto */

export const InstagramContext = createContext()
const InstagramProvider =(props)=>{

    const [photosImg, setphotosImg] =useState([])

    useEffect( ()=>{
  
        const peticion = async()=>{
            const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,media_url,thumbnail_url,permalink&access_token=${token}`) 
            setphotosImg(response.data)
            
        } 
        peticion()
     },[])
     //console.log(photos);
    
    return(
  
     <InstagramContext.Provider
     value={{
        photosImg
     }}
     >
     {props.children}
     </InstagramContext.Provider>
     
    )

  
}

export default InstagramProvider;