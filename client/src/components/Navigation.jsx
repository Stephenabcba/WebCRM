import Container from "react-bootstrap/esm/Container"
import Nav from 'react-bootstrap/nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {
    Link
} from "react-router-dom"

const Navigation = (props) => {

    return (
        <Navbar expand="lg" className="">
            <Container>

                <Navbar.Brand><Link to="/" className="link-light link-underline-opacity-0">WebCRM</Link></Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Navbar.Text><Link to="/" className="link-secondary link-underline-opacity-0 px-2">Home</Link></Navbar.Text>
                        <Navbar.Text><Link to="/toast" className="link-secondary link-underline-opacity-0 px-2">Toast</Link></Navbar.Text>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation