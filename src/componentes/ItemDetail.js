import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

const ItemList = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [elemento, setElemento] = useState([]);

    useEffect(() =>{
        fetch("https://fakestoreapi.com/products?limit=6")
        .then(res => res.json())
        .then(
            (json)=>{
                //console.log(json);
                setIsLoaded(true);
                setElemento(json);
        })
         }, [])

         if(!isLoaded){
             return <div>Loading ... </div>
         }
         else{
             return(
                
                <Container>
                <Row>
                 {elemento.map((item, index)=>       
                <Col key={index}>
                    <Card className="card-product" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.image}/>
                    <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>${item.price}</Card.Text>
                    <Card.Text>{item.description}</Card.Text>
                    <Button className="button-product" variant="primary">Agregar al carrito</Button>
                    </Card.Body>
                    </Card>
                </Col>
                 )}
                </Row>
              </Container>
              
             )
         }
}
 
export default ItemList;