import '../ConfirmReacargga.css'
import { useState,useEffect } from 'react'

const ConfirmRecarga = ({value}) => {

    const writeHello = () => {
        const present = new Date()
        if(present.getHours() > 8 && present.getHours() < 12){
          return 'Bom dia'
        } else if (present.getHours() >= 12 && present.getHours() < 16) {
          return 'Boa tarde'
        } else {
            return 'Poxa, esse horário eu sei que não tem mais como recarregar, se fiz um depósito fico ciente que o valor pode oscilar até o momento em que vocês abrirem a loja.'
        }
        
      }
      



    const [cotation, setCotation] = useState('4,5')
  const url = "https://economia.awesomeapi.com.br/last/CAD-BRL"
  useEffect(()=>{
    
    const getData = async () => {
  
      const response = await fetch(url)
      const dataCad = await response.json()
      const cotation = ((Number(dataCad['CADBRL']['ask'])+Number(dataCad['CADBRL']['bid']))/2)*1.128
      setCotation(cotation.toFixed(2))
    
    }

    getData()
  },[])


const menssageWhats = ()=> {
    return `https://wa.me/5587981116050?text=${writeHello()} Quero recarregar ${value} dólares canadenses, na cotação de R$ ${cotation}. Segue o comprovante.`
}



const textPresponse = () => {
    
    
    return <p> Sua recarga é de {value} dólares canadenses na cotação de {cotation}, <br/>
    transfira R${(cotation*value).toFixed(2)} para nossa conta e envie o comprovante.</p>
    
}

  return (
    <div className="Confirm">

        {textPresponse(value,cotation)}
        <a href={menssageWhats()} target="_blank" rel="noreferrer"  >
        <button>Confirmar!</button>
        </a>
    </div>
  )
}

export default ConfirmRecarga