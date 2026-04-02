import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'APPLICANT'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Placeholder for actual API call
      // await api.post('/auth/register', formData);
      
      setTimeout(() => {
        navigate('/login');
      }, 1000);

    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={7} lg={6}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-5">
              <h2 className="text-center fw-bold mb-4">Create an Account</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name"
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="name@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    name="password"
                    placeholder="Create a strong password" 
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength="6"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="role">
                  <Form.Label>I am a...</Form.Label>
                  <Form.Select name="role" value={formData.role} onChange={handleChange}>
                    <option value="APPLICANT">Job Seeker</option>
                    <option value="EMPLOYER">Employer / Recruiter</option>
                  </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 fw-bold py-2 mb-3 rounded-pill" disabled={loading}>
                  {loading ? 'Creating Account...' : 'Register'}
                </Button>

                <div className="text-center text-muted">
                  Already have an account? <Link to="/login" className="text-decoration-none fw-bold">Login</Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
