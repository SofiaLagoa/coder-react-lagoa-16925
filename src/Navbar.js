import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import {Link} from "react-router-dom"


const NavbarComponent = () => {
    return(
      <header>
    <Navbar collapseOnSelect expand="lg" className="navDecHome justify-content-end">
        <Navbar.Brand> <Link className="itemNav logo" to="/">D H</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto d-flex justify-content-end">
        <Nav.Item><Link className="itemNav p-2" to="/">Home</Link></Nav.Item>
        <Nav.Item><Link className="itemNav p-2" to="/category/nosotros">Deco</Link></Nav.Item>
        <Nav.Item><Link className="itemNav p-2" to="/category/nosotros">Lamparas</Link></Nav.Item>
        <Nav.Item><Link className="itemNav p-2" to="/category/contacto">Sillas</Link></Nav.Item>
        <Nav.Item><Link className="itemNav p-2" to="/category/contacto">Blanqueria</Link></Nav.Item>
        <Nav.Item><Link className="itemNav p-2" to="/category/contacto">Contacto</Link></Nav.Item>
    </Nav>
    <CartWidget/>
  </Navbar.Collapse>
</Navbar>

</header>

    )
}

export default NavbarComponent