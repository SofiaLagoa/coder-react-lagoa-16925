import { createContext, useState} from "react"


export const contexto = createContext();

const {Provider} = contexto

     const CartContext = ({children}) => {
   
     const [item, setItem] = useState()

     const addItem = (cantidad) =>{
         setItem('cantidad ' + cantidad);
         console.log("Cantidad de productos agregados al carrito usando context: "  + cantidad)
     }

     const removeItem = (id) =>{
        console.log("Funciona2")
     }

     return(
         <Provider value={{item, addItem, removeItem}}>
             {children}
         </Provider>
       
     )  

}
 
export default CartContext;