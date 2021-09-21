import { useContext, useState, useEffect} from "react"
import contexto from './CartContext'
import Spinner from 'react-bootstrap/Spinner'

const Cart = () => {
const {cart} = useContext(contexto)
const [isLoaded, setIsLoaded] = useState(false)

useEffect(() =>{
    setIsLoaded(true)
}, [])

if(!isLoaded){
    return (
    <div className="d-flex justify-content-center">
       <Spinner animation="border" role="status">
           <span className="visually-hidden">Loading...</span>
       </Spinner>
    </div>
    )
}
else{
return(
    cart.map((item) => <p>{item.products.id}</p>)
)
}
}
export default Cart;