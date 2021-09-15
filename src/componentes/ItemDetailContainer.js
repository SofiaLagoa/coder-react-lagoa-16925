import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [elemento, setElemento] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const {id} = useParams();
    useEffect(() =>{
      fetch("https://fakestoreapi.com/products/"+id)
      .then(res => res.json())
      .then((json) => { 
              setIsLoaded(true); 
              setElemento(json);
      })
       }, [id])
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
        <>
        <ItemDetail description={elemento.description} category={elemento.category} image={elemento.image} title={elemento.title} price={elemento.price}/>
       
        </>
      )
    } 
   
}
 
export default ItemDetailContainer;