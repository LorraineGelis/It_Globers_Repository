/* Importacion Imagenes */
import puffi from '../../assets/Img_nav/puffi.png';
import puffiPuff from '../../assets/Img_nav/puffi_puff.png';
import puffiRain from '../../assets/Img_nav/puffi_rain.png';
import puffiCart from '../../assets/Img_nav/puffi_cart.png';
import puffiNap from '../../assets/Img_nav/puffi_nap.png'; 

/* Importaciones Exernas */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'; 
import { Link} from "react-scroll";

/*Importacion Css*/
import "../../Css/Navbar.css"

 const Navbar = () => {
  return (
    <header className="navBar">
        <img src={puffi} className="img_Logo" alt="img_Logo" />
        <ul className="menu_Products">
            <li>
                <Link to='puffiPuff' className='product_navBar'>
                    <img src={puffiPuff} alt="Img_navBar" className='img_navBar'/>
                    PUFI PUFF
                </Link>
            </li>

            <li>
            <Link to='pufiRain' className='product_navBar'>
                    <img src={puffiRain} alt="Img_navBar" className='img_navBar' />
                    PUFI RAIN
                </Link>
            </li>

            <li>
            <Link to='pufiCart' className='product_navBar'>
                    <img src={puffiCart} alt="Img_navBar" className='img_navBar'/>
                    PUFI CART
                </Link>
            </li>

            <li>
            <Link to='pufiNap' className='product_navBar'>
                    <img src={puffiNap} alt="Img_navBar" className='img_navBar'/>
                    PUFI NAP
                </Link>
            </li>
        </ul>
        <div className='user'>
            <p>MI CUENTA</p>
            <FontAwesomeIcon className='icon' icon={faAngleDown} />
            <span className='line_vertical'></span>
            <p>MI COMPRA</p>
        </div>
    </header>
  )
}

export default Navbar;

