import { useContext} from "react"
import {contexto} from './CartContext'
import { Link } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'

const Cart = () => {

const {cart, removeCart, emptyCart,elementCart} = useContext(contexto);


return(
    <>
{(elementCart() !== 0) ?
    <div>
        {cart.map(producto => (
            <div key={producto.item.id}>
                 <h4> {producto.item.title} </h4>
                 <h5> Unidades: {producto.cantidad}</h5>
                 <h5> Precio: ${producto.item.price * producto.cantidad}</h5>
                 <img className="img-product-cart" src={producto.item.image} alt="Imagen del producto" />
                 <FaTrashAlt className="my-2" onClick= {() => removeCart(producto.item.id)}/>
             </div>
         ))}
         <hr/>
         <button className="btn button-product" onClick= {emptyCart}>Eliminar todos los productos del carrito</button>
         <Link to={ '/checkout' }><button className="btn button-product">Finalizar la compra</button></Link>
    </div>
    
    :<div> <p> No tenes elementos en tu carrito </p><Link to={ '/' }> Volver a home </Link></div>   
}
</>
)  

}

export default Cart