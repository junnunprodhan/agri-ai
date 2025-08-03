import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import mission from "../images/Hero2.png";

// Service data for easy mapping
const services = [
  {
    icon: "fas fa-seedling",
    title: "AI-Powered Soil Testing",
    text: " Real-time, cost-effective soil health analysis",
  },
  {
    icon: "fas fa-cloud-sun-rain",
    title: "Hyperlocal Weather Forecasting",
    text: "To protect crops from climate shocks",
  },
  {
    icon: "fas fa-tractor",
    title: "Access to Inputs & Machinery",
    text: "Faster, better farming made possible",
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Mobile App & Call Center",
    text: "Expert guidance at their fingertips",
  },
  {
    icon: "fas fa-map-marked-alt",
    title: "Field Teams in 5 Districts",
    text: "ensuring no farmer is left behin",
  },
];

const Introduction = () => {
  return (
    <section
      id="introduction"
      // className="py-5"
      style={{ backgroundColor: "#f8f9fa", paddingTop: "80px" }}
    >
      <Container>
        {/* Section Heading */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="display-4 fw-bold">A New Era in Agriculture</h2>
            <p className="lead text-muted">
              Fusing tradition with technology to build a sustainable and
              prosperous future for farming in Bangladesh.
            </p>
          </Col>
        </Row>

        {/* Vision Section */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <Image
              src={mission}
              rounded
              fluid
              alt="Modern farming"
              className="shadow"
            />
          </Col>
          <Col md={6}>
            <h3 className="fw-light">Our Purpose-Driven Mission</h3>
            <p className="text-secondary">
              Agritech Ventures Ltd is a purpose-driven agri-tech company
              committed to transforming farming in Bangladesh through ethical,
              sustainable, and technologically advanced solutions—all rooted in
              Halal principles. The company champions smallholder farmers,
              aiming to uplift rural communities by enhancing food security,
              climate resilience, and agricultural productivity.
            </p>
            <p className="text-secondary">
              With a strong belief that every farmer—no matter how
              remote—deserves access to modern agricultural tools and knowledge,
              Agri Tech Venture Ltd provides a range of integrated services
              including:
            </p>
            <ul className="text-secondary">
              <li>AI-powered soil testing</li>
              <li>Hyperlocal weather forecasting</li>
              <li>Access to modern farming inputs and machinery</li>
              <li>Mobile and call center-based digital advisory</li>
              <li>On-ground support via field teams in 5 districts</li>
            </ul>
            <p className="text-secondary">
              Agritech Ventures Ltd’s vision is not just to digitize
              agriculture, but to empower rural communities through sustainable,
              ethical, and inclusive innovation—making agriculture smarter,
              safer, and more prosperous for millions.
            </p>
          </Col>
        </Row>

        {/* Services Grid */}
        <Row className="text-center">
          <Col>
            <h3 className="mb-4 fw-light">Our Core Services</h3>
          </Col>
        </Row>
        <Row>
          {services.map((service, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <Card className="border-0 shadow-sm h-100 text-center py-4">
                <Card.Body>
                  <div className="icon-circle bg-success text-white mb-3">
                    <i className={service.icon}></i>
                  </div>
                  <Card.Title as="h5" className="fw-bold">
                    {service.title}
                  </Card.Title>
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

export default Introduction;
