
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    console.log(props)
    return (  
      <>
      <ItemList></ItemList>
      <h1>Bienvenido a la tienda {props.tienda}</h1>
      </>
    );
}
 
export default ItemListContainer;