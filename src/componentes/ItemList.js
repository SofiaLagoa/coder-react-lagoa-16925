import Item from "./Item";
import { useEffect, useState } from "react"; 
import Spinner from 'react-bootstrap/Spinner';
import { firestore } from "./firebase";
import Col from 'react-bootstrap/Col'


const ItemList = (productsList) => {
    const [elemento, setElemento] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() =>{

      const collection = firestore.collection("productos")
        let query = ''
        if(productsList.category === undefined || productsList.category == null || productsList.category === ''){
            query = collection.get()
        } else {
          query = collection.where('category', '==', productsList.category).get()
        }
       query
           .then((snapshot)=>{
             const docs = snapshot.docs
             const productos =[]
             docs.forEach((doc)=>{
               const docSnapshot = doc
               const producto_con_id = {...docSnapshot.data(),id:docSnapshot.id}
               productos.push(producto_con_id)
             })
             setElemento(productos)
             setIsLoaded(true)
           })
           .catch((error)=>{
             console.log(error)
           })

       }, [productsList.category])

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
      
          <Col lg={3}>
            <Item identificador={item.id} image={item.image} title={item.title} price={item.price} key={index} />  
          </Col>
      
        )
       
      )
    } 
    
}

export default ItemList;