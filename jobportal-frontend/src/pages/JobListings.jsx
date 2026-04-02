import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../services/api';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call 
    const fetchJobs = async () => {
      try {
        // const response = await api.get('/jobs');
        // setJobs(response.data);
        setTimeout(() => {
          setJobs([
            { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote', type: 'Full-Time', salary: '$90k - $120k' },
            { id: 2, title: 'Backend Engineer', company: 'Data Systems', location: 'New York, NY', type: 'Full-Time', salary: '$110k - $140k' },
            { id: 3, title: 'UX Designer', company: 'Creative Studio', location: 'San Francisco, CA', type: 'Contract', salary: '$70 - $90/hr' },
          ]);
          setLoading(false);
        }, 500);
      } catch (err) {
        console.error("Failed to fetch jobs", err);
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(search.toLowerCase()) || 
    job.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="py-5">
      <Row className="mb-4 align-items-center">
        <Col md={6}>
          <h2 className="fw-bold mb-0">Browse Jobs</h2>
        </Col>
        <Col md={6}>
          <Form.Control 
            type="text" 
            placeholder="Search by title or company..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-pill px-4"
          />
        </Col>
      </Row>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Row className="g-4">
          {filteredJobs.length > 0 ? filteredJobs.map(job => (
            <Col md={6} lg={4} key={job.id}>
              <Card className="h-100 border-0 shadow-sm job-card-hover transition-all">
                <Card.Body className="d-flex flex-column p-4">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title className="fw-bold mb-1 text-primary">{job.title}</Card.Title>
                    <Badge bg="info" className="rounded-pill">{job.type}</Badge>
                  </div>
                  <Card.Subtitle className="mb-3 text-muted fw-semibold">
                    <i className="bi bi-building me-2"></i>{job.company}
                  </Card.Subtitle>
                  <Card.Text className="text-secondary small mb-1">
                    📍 {job.location}
                  </Card.Text>
                  <Card.Text className="text-secondary small mb-4">
                    💰 {job.salary}
                  </Card.Text>
                  
                  <div className="mt-auto">
                    <Button as={Link} to={`/jobs/${job.id}`} variant="outline-primary" className="w-100 rounded-pill fw-bold">
                      View full details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )) : (
            <Col>
              <div className="text-center py-5 text-muted">
                <h4>No jobs found matching "{search}"</h4>
              </div>
            </Col>
          )}
        </Row>
      )}
    </Container>
  );
};

export default JobListings;
