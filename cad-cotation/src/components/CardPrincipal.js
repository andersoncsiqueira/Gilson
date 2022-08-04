import refresh from "../assets/monetae.png"
import '../CardPrincipal.css';

const CardPrincipal = () => {


const getData = async () => {
  const url = "https://economia.awesomeapi.com.br/last/CAD-BRL"
  const response = await fetch(url)
  const dataCad = await response.json()
  const price = (Number(dataCad['CADBRL']['ask'])+Number(dataCad['CADBRL']['bid']))/2


  return <p className="span2">{price}</p>

}


  return (
    <div className="container">
        <div className="content">
            <span className="span1">Cad</span>
            {getData()}
        </div>
        
        <button><img src={refresh} alt="Imagem simbolizando um 'refresh'" className="imgButton"/></button>
    </div>
  )
}

export default CardPrincipal