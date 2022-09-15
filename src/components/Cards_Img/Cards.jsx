
/*Importacion Css*/
import "../../Css/Cards.css"

const Cards = ( {img} ) => {
    return(
        <a className="cards" href={img.permalink}  target="_blank" rel="noopener noreferrer">
            <img src={img.media_url} alt="img" />
        </a>
    )
}

export default Cards;