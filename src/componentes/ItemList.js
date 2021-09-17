import Item from "./Item";
import { useEffect, useState } from "react"; 
import Spinner from 'react-bootstrap/Spinner';


const ItemList = () => {
    const [elemento, setElemento] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() =>{
      fetch("https://fakestoreapi.com/products?limit=10")
      .then(res => res.json())
      .then(json => { 
              console.log(json);
              setIsLoaded(true); 
              setElemento(json);
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
          elemento.map((item, index)=>           
            <Item identificador={item.id} image={item.image} title={item.title} price={item.price} key={index} />
        
            )
       
      )
    } 
    
}

export default ItemList;