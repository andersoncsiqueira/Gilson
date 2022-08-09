import "../Saudation.css"

const Saudation = () => {




const writeHello = () => {
  const present = new Date()
  console.log(present.getDay())
  if(present.getDay() === 0 || present.getDay() === 6) {
    return <span data-js="hello">Final de semana não tem recarga, bom descanso!</span>
  } else if(present.getHours() > 6 && present.getHours() < 12){
    return <span data-js="hello">Bom dia, Gilson!!</span>
  } else if (present.getHours() >= 12 && present.getHours() < 16) {
    return <span data-js="hello">Boa tarde, Gilson!!</span>
  } else {
    return <span data-js="hello">Sem recarga agora, Gilson!!</span>
  }

 
}



  return (
    <div className="saudation">
        <p className="pSaudation">{writeHello()}</p>
    </div>
  )
}

export default Saudation