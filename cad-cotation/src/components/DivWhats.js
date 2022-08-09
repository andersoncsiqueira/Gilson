import "../DivWhats.css"
import wpp from "../assets/whatsapp.svg"
import { useState } from "react"
import CardOption from "./CardOption";

const DivWhats = () => {
  const [slipt, setSlipt] = useState(false)

 

  const setdiv = ()=> {

    setSlipt(true)
  
}

const outdiv = ()=> {

  setSlipt(false)
  
}

  return (
  <>
    {slipt && <CardOption outdiv={outdiv}/>}
    <div className="container-Wpp" onClick={setdiv}>
    
        <p className="pWhats"> Quero recarregar</p>
        <img src={wpp} alt="icone do whatsapp" className='wpp' />
        
      
    </div>
    
    </>
  )
}

export default DivWhats