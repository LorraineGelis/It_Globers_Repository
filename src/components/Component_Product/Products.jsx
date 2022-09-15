/*Importacion externa de iconos */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

/*Importacion de las imagenes*/
import pufiUmbrella from '../../assets/Img_productos/pufi_umbrella.jpg'
import pufiPurple from '../../assets/Img_productos/pufi_purple.jpg';
import pufiBeach from '../../assets/Img_productos/pufi_beach.jpg';
import pufiCart from '../../assets/Img_productos/pufi_car.jpg';
import pufiBag from '../../assets/Img_productos/pufi_bag.jpg';
import pufiPillow from '../../assets/Img_productos/pufi_pillow.jpg';
import pufiNap from '../../assets/Img_productos/pufi_nap.jpg';

/*Importacion Css*/
import "../../Css/Products.css"

const Products = () => {
    return(
        <section className='products'>
            <article className='primera_image_umbrella'>
                <div className='buton_umbrella'>
                    <button>SHOP</button>
                </div>
            </article>

            <article className='pufi'>
                <img src={pufiUmbrella} alt="pufi_umbrella" />
                <h3>Pufi RAIN</h3>
                <hr className='hr' />
                <p>Descripción del producto. Este es <br /> un texto simulado</p>
                <div className='icono_mayorQue'></div>
                <div className='img_verMas'>
                    <FontAwesomeIcon icon={faChevronRight}/> 
                    <p>VER MAS</p>
                </div>
            </article>

            <article className='pufi'>
                <img src={pufiPurple} alt="pufi_Purple" />
                <h3>Pufi PUFF</h3>
                <hr className='hr' />
                <p>Descripción del producto. Este es <br /> un texto simulado</p>
                <div className='icono_triangulo'></div>
                <div className='img_verMas'>
                    <FontAwesomeIcon icon={faChevronRight}/> 
                    <p>VER MAS</p>
                </div>
            </article>

            <article>
                <img src={pufiBeach} alt="Pufi_Beach" className='image' />
            </article>

            <article>
                <img src={pufiCart} alt="pufi_Cart" className='image' />
                </article>

            <article className='pufi'>
            <img src={pufiBag} alt="pufi_bag" />
            <h3>Pufi CART</h3>
            <hr className='hr' />
                <p>Descripción del producto. Este es <br /> un texto simulado</p>
                <div className='icono_mayorQue'></div>
                <div className='img_verMas'>
                    <FontAwesomeIcon icon={faChevronRight}/> 
                    <p>VER MAS</p>
                </div>
            </article>

            <article className='pufi'>
                <img src={pufiPillow} alt="pufi_Pillow" />
                <h3>Pufi NAP</h3>
                 <hr className='hr' />
                <p>Descripción del producto. Este es <br /> un texto simulado</p>
                <div className='icono_triangulo'></div>
                <div className='img_verMas'>
                    <FontAwesomeIcon icon={faChevronRight}/> 
                    <p>MÁS INFO</p>
                </div>
            </article>
            <article>
                <img src={pufiNap} alt="Pufi_Nap" className='image' />
                </article>
        </section>
    )
}

export default Products;