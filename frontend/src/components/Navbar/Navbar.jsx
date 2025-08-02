import { useState } from "react";
import { NavLink } from "react-router";
import "./Navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasExample() {
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          sticky='top'
          className='bg-body-tertiary'
          expanded={expanded}
          onToggle={setExpanded}
        >
          <Container fluid>
            <NavLink
              className='navLink navTitle'
              to='/'
              onClick={handleNavLinkClick}
            >
              Task Manager
            </NavLink>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <NavLink
                    className='navLink home'
                    to='/'
                    onClick={handleNavLinkClick}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className='navLink'
                    to='/contact'
                    onClick={handleNavLinkClick}
                  >
                    Contact
                  </NavLink>
                  <NavDropdown
                    title='Dropdown'
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item
                      href='#action3'
                      onClick={handleNavLinkClick}
                    >
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href='#action4'
                      onClick={handleNavLinkClick}
                    >
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href='#action5'
                      onClick={handleNavLinkClick}
                    >
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className='d-flex'>
                  <Form.Control
                    type='search'
                    placeholder='Search'
                    className='me-2'
                    aria-label='Search'
                  />
                  <Button variant='outline-success'>Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
