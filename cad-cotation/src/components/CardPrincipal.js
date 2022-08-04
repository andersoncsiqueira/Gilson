import refresh from "../assets/monetae.png"
import '../CardPrincipal.css';

const CardPrincipal = () => {
  return (
    <div className="container">
        <div className="content">
            <span className="span1">Cad</span>
            <span className="span2" data-js="price">4,50</span>
        </div>
        <button><img src={refresh} alt="Imagem simbolizando um 'refresh'" className="imgButton"/></button>
    </div>
  )
}

export default CardPrincipal