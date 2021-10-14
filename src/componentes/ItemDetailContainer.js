import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from "react-router-dom";
import { firestore } from "./Firebase";

const ItemDetailContainer = () => {

    const [elemento, setElemento] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const {id} = useParams();
    useEffect(() =>{

      let idProducto = id;

      const db = firestore
      let producto = db.collection('productos').doc(idProducto)
      producto.get().then((respuesta)=>{
        setElemento(
          {...respuesta.data(),   
            id: respuesta.id,          
         });
         setIsLoaded(true)
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
        <ItemDetail description={elemento.description} category={elemento.category} image={elemento.image} title={elemento.title} price={elemento.price} id={elemento.id}/>
        </>
      )
    } 
   
}
 
export default ItemDetailContainer;