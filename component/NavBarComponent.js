import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../logo.jpeg"
import { Link } from 'react-router-dom';
import "../../src/appStyles/scss.scss"

function NavBars() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="img" style={{ height: 65, width: 85 }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{ width: "-webkit-fill-available", justifyContent: "flex-end" }}>
                        <Nav.Link as={Link} to="/" className="navBar-text">Home</Nav.Link>
                        <Nav.Link as={Link} to="/link" className="navBar-text">Link</Nav.Link>
                        <Nav.Link as={Link} to="/gallery" className="navBar-text">Gallery</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown" className="navBar-text">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/contact" className="navBar-text">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBars;