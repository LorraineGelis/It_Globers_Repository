
/*Importar imagenes*/

import pufiFooter from '../../assets/Img_logo/puffi_footer.jpg';
import imgQr from '../../assets/Img_logo/codigo_qr.png';
import img_compra from '../../assets/Img_logo/compra_segura.png';


import facebook from '../../assets/Img_redes/facebook.png';
import instagram from '../../assets/Img_redes/instagram.png';
import twitter from '../../assets/Img_redes/twitter.png';

/*Importacion Css*/
import "../../Css/Footer.css"

const Footer = () => {

    return(
        <section className="footer">

            <div className="footer_logo">
                <img src={pufiFooter} alt="puffi_fotter" />
            </div>
            <div>
                <h5>PUFI RAIN</h5>
                <h5>PUFI PUFF</h5>
                <h5>PUFI CART</h5>
                <h5>PUFI NAP</h5>
            </div>

            <div>
                <h5>CONTACTO</h5>
                <h5>AYUDA</h5>
                <h5>CÓMO COMPRAR</h5>
                <h5>TÉRMINOS & CONDICIONES</h5>
            </div>

            <div>
                <h5>COMPRA 100% SEGURA</h5>
                <div className='compras'>
                    <img src={imgQr} alt="img_qr" />
                    <img src={img_compra} alt="img_compra" />
                    <p>COMPRA CON <br /> LA GARANTIA <br />DE PUFI</p>
                </div>
            </div>

            <div className='redes_sociales'>
                <h5>SEGUINOS EN</h5>
                <a href="https://www.facebook.com/profile.php?id=100019097958018" target="_blank"  rel="noopener noreferrer">
                    <img src={facebook} alt="" />
                </a>
                <a href="https://www.instagram.com/lorrainetest/" target="_blank"  rel="noopener noreferrer">
                    <img src={instagram} alt="" />
                </a>
                <a href="https://twitter.com/abc_tecnologia" target="_blank"  rel="noopener noreferrer">
                    <img src={twitter} alt="" />
                </a>
            </div>
        </section>
    )
}

export default Footer;