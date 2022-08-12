import '../CardOption.css'
import { useState } from 'react'

import ConfirmRecarga from './ConfirmRecarga'


const CardOption = ({outdiv}) => {

 

let [showConfirm, setShowConfirm] = useState(false)
let [value, setValue] = useState()

const chose = (e) => {
  setValue(e.target.value)

  setShowConfirm(true)
 
 
}


 
  return (
    <div className={'containOption'}>
      <p className='pX' onClick={outdiv}>X</p>
      <p className='pOptions'>Quantos dólares quer recarregar?</p>
      <div className='contaionButtons'>
        <button className='buttonOptionsCad' value="25" onClick={chose}>25</button>
        <button className='buttonOptionsCad' value="50" onClick={chose}>50</button>
        <button className='buttonOptionsCad' value="100" onClick={chose}>100</button>
      </div>
      {showConfirm && <ConfirmRecarga value={value}/>}
      </div>
  )
}

export default CardOption