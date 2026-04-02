import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary text-white py-5 mb-5 text-center px-3" style={{ background: 'linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%)' }}>
        <Container className="py-5">
          <h1 className="display-4 fw-bold mb-4">Find Your Dream Job Today</h1>
          <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            Connect with top employers and discover opportunities that match your skills. Your next big career move starts here.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button as={Link} to="/jobs" variant="light" size="lg" className="fw-bold px-4 rounded-pill">
              Browse Jobs
            </Button>
            <Button as={Link} to="/register" variant="outline-light" size="lg" className="fw-bold px-4 rounded-pill">
              Create an Account
            </Button>
          </div>
        </Container>
      </div>

      {/* Featured Section */}
      <Container className="mb-5">
        <h2 className="text-center fw-bold mb-4">Why Choose JobPortal?</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <Card.Body>
                <div className="display-4 text-primary mb-3">🚀</div>
                <Card.Title className="fw-bold">Fast Applications</Card.Title>
                <Card.Text className="text-muted">
                  Apply to jobs with a single click using your saved profile.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <Card.Body>
                <div className="display-4 text-primary mb-3">🏢</div>
                <Card.Title className="fw-bold">Top Companies</Card.Title>
                <Card.Text className="text-muted">
                  We partner with thousands of industry-leading companies.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <Card.Body>
                <div className="display-4 text-primary mb-3">🔒</div>
                <Card.Title className="fw-bold">Secure</Card.Title>
                <Card.Text className="text-muted">
                  Your data and application history are safe with our secure platform.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
