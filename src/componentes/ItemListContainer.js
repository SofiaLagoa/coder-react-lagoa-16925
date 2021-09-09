import ItemList from "./ItemList"

const ItemListContainer = (props) => {
   
    return (  
      <>
      <h1>Bienvenido a la tienda {props.tienda}</h1>
      <ItemList></ItemList>
      </>
    );
}

export default ItemListContainer;   