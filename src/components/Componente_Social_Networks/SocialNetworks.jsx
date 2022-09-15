import React, {useContext} from 'react';

/*Importaciones de componentes*/
import Cards from '../Cards_Img/Cards.jsx';


import  { InstagramContext } from '../context/instagramData';
import Forms from '../Forms/Forms';


/*Importacion Css*/
import "../../Css/SocialNetworks.css"

const SocialNetwork = () => {

    const {photosImg} = useContext(InstagramContext);
  


    return(
        <div>
            <div className='title_socialNetwork'>
                <h4 className='title_h4'>INSTAGRAM</h4>
                <a href="https://www.instagram.com/lorrainetest/" target="_blank" rel="noopener noreferrer">
                    <h1>#ESPUFI</h1>
                </a>
            </div>
            {
                <div className='title_Instagram'>
                    {
                        photosImg.data?.slice(0,6).map(img=>(
                           /*  console.log(img, "aqui, por favor axios trae la data :(") */
                           <Cards img={img} key={img.id}/> 
                        ))
                    }
                </div>
            }

            <div className='title_suscribete'>
                <h4 className='title_h4'>NEWSLETTER</h4>
                <h2>SUSCRIBETE</h2>
                <p>Y enterate de todas las novedades</p>
            </div>

            <div className='form'>
                <Forms></Forms>
            </div>
        </div>
    )
}

export default SocialNetwork;
