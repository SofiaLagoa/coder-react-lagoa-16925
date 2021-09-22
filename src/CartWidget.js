import { Link } from "react-router-dom"
import { useContext } from 'react'
import { contexto } from "./componentes/CartContext"
import { FiShoppingCart } from 'react-icons/fi'


const CartWidget = () => {
    const {elementCart} = useContext(contexto);
   return(
       <>
    {((elementCart) !== 0)? 
        <div> 
          <Link to="/cart"><p><FiShoppingCart/></p><span>{elementCart()}</span></Link>
        </div>
        :
        <Link to="/cart"><FiShoppingCart/></Link>
    }  
    </>
   )
}
 
export default CartWidget;

