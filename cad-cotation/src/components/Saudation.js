import "../Saudation.css"
import {useState} from 'react'

const Saudation = () => {

const [time, setTime] = useState()



const writeHello = () => {
  const present = new Date()

    console.log(typeof present.getHours())

  if(present.getHours() > 6 && present.getHours() < 12){
    return <span data-js="hello">Bom dia</span>
  } else if (present.getHours() > 12 && present.getHours() < 16) {
    return <span data-js="hello">Boa tarde</span>
  } else {
    return <span data-js="hello">Sem recarga agora</span>
  }

  
}



  return (
    <div className="saudation">
        <p className="pSaudation">{writeHello()}, Gilson!!</p>
    </div>
  )
}

export default Saudation