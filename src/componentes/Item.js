import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const Item = (products) => {
    return ( 
    <>
<Card className="card-product" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={products.image} />
    <Card.Body>
    <Card.Title>{products.title}</Card.Title>
    <Card.Text>${products.price}</Card.Text>
    <Button className="button-product" variant="primary">
        <Link to={"/item/" + products.identificador}>Ver mas</Link>
        </Button>
    </Card.Body>
</Card> 

</>
     );
}

export default Item;