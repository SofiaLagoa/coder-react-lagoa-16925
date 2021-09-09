import Item from "./Item";
import { useEffect, useState } from "react"; 

const arrayItems = () => {
    return new Promise((resolver, reject) => 
    setTimeout(() => {
        resolver([<Item/>, <Item/>])
    }, 2000)        
    )}

const ItemList = () => {

    const [elemento, setElemento] = useState([]);

    useEffect(() =>{
        arrayItems().then(data=>
            setElemento(data)
        )   
         }, [])

    return ( 
          elemento.length === 0 ? (
              <h1>Cargando...</h1>
          ):(
             <ul className="lista">
                 {elemento.map((element, index) =>
                     <li  key={index}>
                         {element}
                     </li>
                 )}
             </ul>
          )
     );
}

export default ItemList;