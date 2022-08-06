import "../Saudation.css"

const Saudation = () => {




const writeHello = () => {
  const present = new Date()
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