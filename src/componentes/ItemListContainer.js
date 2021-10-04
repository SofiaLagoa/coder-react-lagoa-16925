import ItemList from "./ItemList"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useParams } from "react-router";

const ItemListContainer = () => {
  
  //let categories = 'Lampara';
  const {category} = useParams();
  const asd = category;
  
    return (  
    <>
    <div className="banner-principal">
      <h1 className="h1-index">Convertimos tu casa en tu hogar</h1>
    </div>
    
      <Container>
        <Row>
           <ItemList category={asd} key={0}></ItemList>  
        </Row> 
      </Container>
    </>
    );
}

export default ItemListContainer;   