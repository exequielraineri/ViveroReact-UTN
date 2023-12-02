import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.png";
import "../css/Menu.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const Menu = ({ carrito }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Navbar
      expand="lg"
      className="bloque-menu"
      data-bs-theme="light"
    >
      <Container>
        <Navbar>
          <Link to={"/ViveroReact-UTN"}>
            <img
              data-aos="fade-right"
              data-aos-duration="2000"
              src={logo}
              width={60}
              alt="Logo Vivero Mis Raices"
            />
          </Link>
        </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto items"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Link to={"/ViveroReact-UTN"}>Inicio</Link>
            <Link to={"/ViveroReact-UTN/productos"}>Productos</Link>
            <Link to={"/ViveroReact-UTN/carrito"}>
              Carrito <span>{carrito.length}</span>
            </Link>
            <Link to={"/ViveroReact-UTN/nosotros"}>Nosotros</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
