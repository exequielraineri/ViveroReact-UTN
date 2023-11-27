import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/img/logo.png";
import "../css/Menu.css";
import { Link } from 'react-router-dom';
export const Menu = ({ carrito }) => {

  return (
    <Navbar expand="lg" className="bloque-menu" data-bs-theme="light">
      <Container>
        <Navbar.Brand href='/'><img src={logo} width={60} alt="Logo Vivero Mis Raices" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto items">
            <Link to={"/"}>Inicio</Link>
            <Link to={"/productos"}>Productos</Link>
            <Link to={"/carrito"}>Carrito <span>{carrito.length}</span></Link>
            <Link to={"/nosotros"}>Nosotros</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
