import refresh from "../assets/monetae.png"
import '../CardPrincipal.css';

import {useState,useEffect} from "react"



const CardPrincipal = () => {

  const [price, setPrice] = useState('4,5')
  const url = "https://economia.awesomeapi.com.br/last/CAD-BRL"
  useEffect(()=>{
    
    const getData = async () => {
  
      const response = await fetch(url)
      const dataCad = await response.json()
      const price0 = ((Number(dataCad['CADBRL']['ask'])+Number(dataCad['CADBRL']['bid']))/2)*1.37
      
      setPrice(price0.toFixed(2))
    
    }

    getData()
  },[])




  return (
    <div className="container">
        <div className="content">
            <span className="span1">Cad</span>
            <span className="span2">{price}</span>
        </div>
       
        <button><img src={refresh} alt="Imagem simbolizando um 'refresh'" className="imgButton"/></button>
    </div>
  )
}

export default CardPrincipal