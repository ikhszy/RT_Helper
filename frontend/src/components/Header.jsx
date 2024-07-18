import {Navbar, Nav, Container, NavbarBrand} from 'react-bootstrap';
import {FaShoppingCart, FaUser } from "react-icons/fa";
import logo from '../assets/logo.png';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
        <Navbar
            bg="light" data-bs-theme="dark" expand="lg" collapseOnSelect>
            <Container>
            <LinkContainer to="/">
                <NavbarBrand>
                    <img src={logo} alt='shop'>
                    </img> shop
                    </NavbarBrand>
                    </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <nav className="ms-auto">
                        <LinkContainer to="/cart">
                            <Nav.Link>
                                <FaShoppingCart /> Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link>
                                <FaUser /> Login
                            </Nav.Link>
                        </LinkContainer>
                        
                    </nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header