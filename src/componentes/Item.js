import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

const Item = () => {
    return ( 
<Card className="card-product" style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.fravega.com/f1000/0ec3af99701dbf0665ec61ea3816b028.jpg" />
    <Card.Body>
    <Card.Title>Televisor</Card.Title>
    <Card.Text>
      Tv smart 43' 4k 
    </Card.Text>
    <Button className="button-product" variant="primary">Agregar al carrito</Button>
    </Card.Body>
</Card>
     );
}
 
export default Item;