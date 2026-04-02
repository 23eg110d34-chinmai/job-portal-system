import React from 'react';
import { Container, Row, Col, Card, Table, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ApplicantDashboard = () => {
  const applications = [
    { id: 1, jobTitle: 'Frontend Developer', company: 'Tech Corp', appliedDate: 'Oct 12, 2023', status: 'Under Review' },
    { id: 2, jobTitle: 'React Native Engineer', company: 'Mobile Apps Inc', appliedDate: 'Oct 05, 2023', status: 'Rejected' },
    { id: 3, jobTitle: 'Fullstack Engineer', company: 'Startup IO', appliedDate: 'Oct 15, 2023', status: 'Interview Scheduled' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Under Review': return 'warning text-dark';
      case 'Interview Scheduled': return 'success';
      case 'Rejected': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-4">My Applications</h2>
      
      <Row className="mb-5 g-4">
        <Col md={4}>
          <Card className="border-0 shadow-sm text-center">
            <Card.Body className="py-4">
              <h1 className="display-4 fw-bold text-primary">{applications.length}</h1>
              <Card.Text className="text-muted fw-semibold">Total Applications</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="border-0 shadow-sm">
        <Card.Body className="p-0">
          <Table responsive hover className="align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="py-3 px-4 w-25">Job Title</th>
                <th className="py-3">Company</th>
                <th className="py-3">Applied Date</th>
                <th className="py-3">Status</th>
                <th className="py-3 text-end px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(app => (
                <tr key={app.id}>
                  <td className="px-4 py-3 fw-bold">
                    <Link to={`/jobs/${app.id}`} className="text-decoration-none">{app.jobTitle}</Link>
                  </td>
                  <td className="text-secondary">{app.company}</td>
                  <td className="text-secondary">{app.appliedDate}</td>
                  <td>
                    <Badge bg={getStatusBadge(app.status)} className="rounded-pill p-2 px-3 fw-normal">
                      {app.status}
                    </Badge>
                  </td>
                  <td className="text-end px-4">
                    <Button variant="outline-secondary" size="sm" className="rounded-pill">View Details</Button>
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

export default ApplicantDashboard;
