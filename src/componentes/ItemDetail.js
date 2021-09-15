import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';

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
    </Card.Body>
</Card> 

<ItemCount stock={5} initial={1} onAdd={(cantidad)=>{console.log(cantidad)}}/>
</>
     );
}
 
export default ItemDetail;