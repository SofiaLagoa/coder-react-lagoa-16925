import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

const ItemDetail = (products) => {
    return ( 
<>
<Card className="card-product" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={products.image} />
    <Card.Body>
    <Card.Title>{products.title}</Card.Title>
    <Card.Text>{products.description}</Card.Text>
    <Card.Text>{products.category}</Card.Text>
    <Card.Text>${products.price}</Card.Text>
    <Button className="button-product" variant="primary">Agregar al carrito</Button>
    </Card.Body>
</Card> 
</>
     );
}
 
export default ItemDetail;