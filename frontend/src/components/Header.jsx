import {Navbar, Nav, Container, NavbarBrand} from 'react-bootstrap';
import {FaShoppingCart, FaUser } from "react-icons/fa";
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
        <Navbar
            bg="light" data-bs-theme="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt='shop'>
                    </img> shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <nav className="ms-auto">
                        <Nav.Link href="/cart"><FaShoppingCart /> Cart</Nav.Link>
                        <Nav.Link href="/login"><FaUser /> Login</Nav.Link>
                    </nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header