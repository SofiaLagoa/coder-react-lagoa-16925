import { createContext, useState} from "react"


export const contexto = createContext();

const {Provider} = contexto
    //aca imprimo el carro la primera vez que empieza el programa
     const CartContext = ({children}) => {
     const [cart, setCart] = useState([])
     console.log(cart);
     const addCart = (item, cantidad) =>{
         console.log("El id del item es: " + item.id)
        if(isInCart(item.id)){
            console.log("Encontre item y lo voy a sumar")
            const updateCart = [...cart];
			updateCart.forEach((element) => {
				if(element.item.id === item.id) {
					element.cantidad += cantidad;
				}
			})
			setCart(updateCart)
        }
        else{
            console.log("no encontre item y lo voy a agregar")
        setCart([...cart, {item, cantidad}])
        cart.forEach((element) => console.log(element))
        }
    }
    const isInCart = (id) => {
	return cart.find(element => element.item.id === id)
	}

    const removeCart = (itemId) => {
		const cartFilter = cart.filter(element => element.item.id !== itemId)
		return setCart(cartFilter)
	}

     return(
         <Provider value={{cart, addCart, removeCart}}>
             {children}
         </Provider>
     ) 
}
 
export default CartContext;