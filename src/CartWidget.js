import { Link } from "react-router-dom"
import { useContext } from 'react'
import { contexto } from "./componentes/CartContext"
import { FiShoppingCart } from 'react-icons/fi'


const CartWidget = () => {
    const {elementCart} = useContext(contexto);
   return(
       <>
    {((elementCart) !== 0)? 
        <div className="icono-carrito"> 
          <Link className="icono-carrito" to="/cart"><p><FiShoppingCart/></p><span>{elementCart()}</span></Link>
        </div>
        :
        <Link className="itemNav" to="/cart"><FiShoppingCart/></Link>
    }  
    </>
   )
}
 
export default CartWidget;

