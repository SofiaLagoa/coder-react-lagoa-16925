import { createContext, useState, useEffect} from "react"
export const contexto = createContext();

const Cart = () => {
const [cart, setCart] = useState([])
const [isLoaded, setIsLoaded] = useState(false);

useEffect(() =>{
    setIsLoaded(true)
    setCart(contexto)
}, [])

if(!isLoaded){
    return (
        <>
        <p>Cargando</p>
        </>
    )
}
else{

return(
    cart.map((item) => <p>{item.products.id}</p>)
)
  
}
}
export default Cart;