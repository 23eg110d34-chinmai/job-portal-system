import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const SiteNavbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role'); // 'APPLICANT' or 'EMPLOYER'

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-4 shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          JobPortal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/jobs">Browse Jobs</Nav.Link>
            
            {token && role === 'EMPLOYER' && (
              <Nav.Link as={Link} to="/dashboard/employer">Dashboard</Nav.Link>
            )}
            {token && role === 'APPLICANT' && (
              <Nav.Link as={Link} to="/dashboard/applicant">My Applications</Nav.Link>
            )}
          </Nav>
          <Nav>
            {!token ? (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">
                  <Button variant="light" size="sm" className="fw-bold text-primary">Sign Up</Button>
                </Nav.Link>
              </>
            ) : (
              <Button variant="outline-light" size="sm" onClick={handleLogout} className="ms-2">
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
