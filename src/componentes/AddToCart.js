import { useState } from "react";
import { Link } from "react-router-dom";


const InputCount = ()=>{
    return <Link to="/cart"><button className="btn">Terminar compra</button></Link>
}



const AddToCart = (changeButton) => {

    const ButtomCount = ()=>{
    
        return <button className="btn" onClick={changeButton.add}>Agregar al carrito</button>
    } 

    const [inputType, setInputType] = useState('buttom');
    const handlerInter = ()=> {
        setInputType('input')
    }
  
     return (
         <div onClick={handlerInter}>

               {
                inputType === 'buttom' ? 
                  <ButtomCount/>
                  :
                  <InputCount/>
}
         </div>
     )
}
 
export default AddToCart;