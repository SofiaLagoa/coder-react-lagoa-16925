import { useState } from "react";
import { Link } from "react-router-dom";


const InputCount = ()=>{
    return <Link to="Cart.js"><button  className="btn">Terminar compra</button></Link>
}

const ButtomCount = ()=>{
    return <button  className="btn">Agregar al carrito</button>
} 

const AddToCart = () => {

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