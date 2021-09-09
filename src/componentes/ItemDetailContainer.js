import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Spinner from 'react-bootstrap/Spinner'

const ItemDetailContainer = () => {

    const [elemento, setElemento] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() =>{
      fetch("https://fakestoreapi.com/products?limit=1")
      .then(res => res.json())
      .then((json) => { 
              console.log("aca estoy");
              let producto = json[0]; 
              setIsLoaded(true); 
              setElemento(producto);
      })
       }, [])
       if(!isLoaded){
        return (
   <div className="d-flex justify-content-center">
       <Spinner animation="border" role="status">
           <span className="visually-hidden">Loading...</span>
       </Spinner>
   </div>)
    }
    else{
      return(
        <ItemDetail image={elemento.image} title={elemento.title} price={elemento.price}/>
      )
    } 
   
}
 
export default ItemDetailContainer;