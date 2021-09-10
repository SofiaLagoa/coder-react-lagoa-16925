import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import {Link} from "react-router-dom"


const NavbarComponent = () => {
    return(
      <header>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand> <Link to="/">E-commerce</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to="/">Home</Link></Nav.Link>
      <Nav.Link><Link to="/category/nosotros">Nosotros</Link></Nav.Link>
      <Nav.Link><Link to="/category/contacto">Contacto</Link></Nav.Link>
    </Nav>
    <CartWidget/>
  </Navbar.Collapse>
</Navbar>

</header>

    )
}

export default NavbarComponent