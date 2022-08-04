import "../DivWhats.css"
import wpp from "../assets/whatsapp.svg"

const DivWhats = () => {
  return (
    <div className="container-Wpp">
        <p> Quero recarregar</p>
        <img src={wpp} alt="icone do whatsapp" className="wpp"/>
        
    </div>
  )
}

export default DivWhats