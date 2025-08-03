import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const services = [
  {
    icon: "fa-cloud-sun-rain",
    title: "Hyperlocal Weather Forecasting",
    text: "To protect crops from climate shocks.",
  },
  {
    icon: "fa-flask",
    title: "AI-Powered Soil Testing",
    text: "Real-time, cost-effective soil health analysis.",
  },
  {
    icon: "fa-tractor",
    title: "Access to Inputs & Machinery",
    text: "Faster, better farming made possible.",
  },
  {
    icon: "fa-mobile-alt",
    title: "Mobile App & Call Center",
    text: "Expert guidance at their fingertips.",
  },
  {
    icon: "fa-users",
    title: "Field Teams in 5 Districts",
    text: "Ensuring no farmer is left behind.",
  },
  {
    icon: "fa-hands-helping",
    title: "Incubation Support",
    text: "Nurturing the next generation of agritech startups.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      style={{
        paddingTop: "80px",
      }}
      className="services-section bg-light"
    >
      <Container>
        <div className="text-center">
          <h2 className="display-5">What We Are Serving</h2>
          <p className="lead text-muted mb-5">
            Our proven solutions are designed to empower farmers and
            revolutionize agriculture in Bangladesh.
          </p>
        </div>
        <Row>
          {services.map((service, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="h-100 text-center shadow-sm service-card">
                <Card.Body>
                  <div className="mb-3">
                    <i className={`fas ${service.icon} fa-3x text-success`}></i>
                  </div>
                  <Card.Title as="h5">{service.title}</Card.Title>
                  <Card.Text className="text-muted">{service.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
