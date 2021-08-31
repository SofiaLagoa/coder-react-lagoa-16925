
import ItemList from "./ItemDetail";

const ItemListContainer = (props) => {
    console.log(props)
    return (  
      <>
      <h1>Bienvenido a la tienda {props.tienda}</h1>
      <ItemList/>     
      </>
    );
}
 
export default ItemListContainer;