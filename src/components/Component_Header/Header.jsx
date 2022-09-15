/* Se importa el componente NavBar */
import Navbar from '../Component_Navbar/Navbar';

/*Importacion Css*/
import "../../Css/Header.css"

 const Header = () => {
    return(
        <div className='slider_background'>
        <Navbar></Navbar>
        <main>
            <h1>ESTÁR CÓMODO,<br/>NUNCA FUE TAN FÁCIL.</h1>
        </main>
        <div className='butonDiv'>
            <button type='buton' className='buton'>SHOP</button>
        </div>
        </div>
    )
}

export default Header;
