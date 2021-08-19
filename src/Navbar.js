import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';


const NavbarComponent = () => {
    return(
      <header>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Nosotros</Nav.Link>
      <NavDropdown title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Producto 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Producto 2</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Producto 3</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
    </Nav>
    <CartWidget/>
  </Navbar.Collapse>
</Navbar>

</header>

    )
}

export default NavbarComponent