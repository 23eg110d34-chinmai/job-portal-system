import React from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EmployerDashboard = () => {
  // Placeholder mock data
  const myJobs = [
    { id: 1, title: 'Frontend Developer', applicants: 12, status: 'Active', postedDate: 'Oct 10, 2023' },
    { id: 2, title: 'UX Designer', applicants: 5, status: 'Closed', postedDate: 'Sep 25, 2023' }
  ];

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2 className="fw-bold mb-0">Employer Dashboard</h2>
        <Button variant="primary" className="fw-bold rounded-pill shadow-sm">
          + Post a New Job
        </Button>
      </div>

      <Row className="mb-5 g-4">
        <Col md={4}>
          <Card className="border-0 shadow-sm bg-primary text-white text-center">
            <Card.Body className="py-4">
              <h1 className="display-4 fw-bold">2</h1>
              <Card.Text className="fs-5">Total Jobs Posted</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-sm bg-success text-white text-center">
            <Card.Body className="py-4">
              <h1 className="display-4 fw-bold">17</h1>
              <Card.Text className="fs-5">Total Applicants</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="border-0 shadow-sm">
        <Card.Header className="bg-white border-bottom-0 pt-4 pb-0 px-4">
          <h4 className="fw-bold">Manage Your Jobs</h4>
        </Card.Header>
        <Card.Body className="p-4">
          <Table responsive hover className="align-middle">
            <thead className="table-light">
              <tr>
                <th>Job Title</th>
                <th>Posted Date</th>
                <th>Status</th>
                <th>Applicants</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myJobs.map(job => (
                <tr key={job.id}>
                  <td className="fw-bold text-primary">{job.title}</td>
                  <td className="text-secondary">{job.postedDate}</td>
                  <td>
                    <span className={`badge rounded-pill bg-${job.status === 'Active' ? 'success' : 'secondary'}`}>
                      {job.status}
                    </span>
                  </td>
                  <td>{job.applicants} Candidates</td>
                  <td>
                    <Button variant="outline-primary" size="sm" className="me-2 rounded-pill">View Applicants</Button>
                    <Button variant="outline-danger" size="sm" className="rounded-pill">Close Job</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EmployerDashboard;
