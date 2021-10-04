import ItemList from "./ItemList"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const ItemListContainer = (props) => {
   
    return (  
    <>
    <div className="banner-principal">
      <h1 className="h1-index">Convertimos tu casa en tu hogar</h1>
    </div>
    
      <Container>
        <Row>
           <ItemList></ItemList>  
        </Row> 
      </Container>
    </>
    );
}

export default ItemListContainer;   