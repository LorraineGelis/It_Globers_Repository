
import logoBrand from "../../assets/Img_logo/BrandLive.png";

/*Importacion Css*/
import "../../Css/Copyright.css"

const Copyright = () => {
    return(
        <div className="copyright">
            <p>PUFI Copyright 2017- todos los derechos reservados</p>
            <img src={logoBrand} alt="" />
        </div>
    )
}

export default Copyright;