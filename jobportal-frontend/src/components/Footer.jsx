import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container className="text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} JobPortal. All Rights Reserved.</p>
        <small className="text-secondary">Designed with React and Bootstrap</small>
      </Container>
    </footer>
  );
};

export default Footer;
