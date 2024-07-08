import {Navbar, Nav, Container, NavbarBrand} from 'react-bootstrap';
import {FaShoppingCart, FaUser } from "react-icons/fa";


const Header = () => {
  return (
    <header>
        <Navbar
            bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <nav className="ms-auto">
                        <Nav.Link href="/cart"><FaShoppingCart />Cart</Nav.Link>
                        <Nav.Link href="/login"><FaUser />SignIn</Nav.Link>
                    </nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header