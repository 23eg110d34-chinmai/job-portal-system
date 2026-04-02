import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call based on ID
    const fetchJob = async () => {
      try {
        setTimeout(() => {
          setJob({ 
            id, 
            title: 'Software Engineer', 
            company: 'Tech Corp', 
            location: 'Remote', 
            type: 'Full-Time', 
            salary: '$90k - $120k',
            description: 'We are looking for a passionate Software Engineer to design, develop and install software solutions. Software Engineer responsibilities include gathering user requirements, defining system functionality and writing code in various languages, like Java, Ruby on Rails or .NET programming languages. Our ideal candidates are familiar with the software development life cycle (SDLC) from preliminary system analysis to tests and deployment.',
            requirements: ['Proven experience as a Software Engineer or Software Developer', 'Experience designing interactive applications', 'Ability to develop software in C, C++, C#, Java or other selected languages', 'Excellent knowledge of relational databases, SQL and ORM technologies (JPA2, Hibernate)']
          });
          setLoading(false);
        }, 500);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  if (loading) {
    return <div className="text-center py-5"><div className="spinner-border text-primary"></div></div>;
  }

  if (!job) {
    return <Container className="py-5 text-center"><h2>Job not found</h2><Link to="/jobs">Back to jobs</Link></Container>;
  }

  return (
    <Container className="py-5">
      <Link to="/jobs" className="text-decoration-none mb-4 d-inline-block">&larr; Back to all jobs</Link>
      <Row>
        <Col lg={8}>
          <Card className="border-0 shadow-sm mb-4">
            <Card.Body className="p-4 p-md-5">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h1 className="fw-bold text-primary mb-0">{job.title}</h1>
                <Badge bg="success" className="fs-6 px-3 py-2 rounded-pill">Actively Hiring</Badge>
              </div>
              <h4 className="text-muted mb-4">{job.company}</h4>
              
              <div className="d-flex flex-wrap gap-3 mb-5 border-bottom pb-4">
                <div className="bg-light px-3 py-2 rounded"><span className="fw-bold">📍 Location:</span> {job.location}</div>
                <div className="bg-light px-3 py-2 rounded"><span className="fw-bold">💼 Type:</span> {job.type}</div>
                <div className="bg-light px-3 py-2 rounded"><span className="fw-bold">💰 Salary:</span> {job.salary}</div>
              </div>

              <h4 className="fw-bold mb-3">Job Description</h4>
              <p className="text-secondary mb-4 lh-lg">{job.description}</p>

              <h4 className="fw-bold mb-3">Requirements</h4>
              <ul className="text-secondary lh-lg mb-0">
                {job.requirements.map((req, index) => <li key={index}>{req}</li>)}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="border-0 shadow-sm sticky-top" style={{ top: '2rem' }}>
            <Card.Body className="p-4 text-center">
              <h5 className="fw-bold mb-4">Ready to Apply?</h5>
              <Button variant="primary" size="lg" className="w-100 rounded-pill fw-bold mb-3">
                Apply Now
              </Button>
              <Button variant="outline-secondary" className="w-100 rounded-pill fw-bold">
                Save for Later
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default JobDetails;
