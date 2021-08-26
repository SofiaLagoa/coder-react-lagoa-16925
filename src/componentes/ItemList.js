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






 //crear la promesa!
        //adentro ponemos el timeout
        //primer parametro del timeout es el item que se va a imprimir, osea el <item></item>
        //segundo parametro del timeout es el numero en segundos, el retraso osea 2000
        //llamamos a la promesa
        //BOOM, en dos segundos te aparece el producto