import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import tab from "../images/tab.png";
const benefits = [
  {
    icon: "fa-leaf",
    title: "Boost Rural Incomes",
    text: "Create sustainable income streams for farming communities.",
  },
  {
    icon: "fa-tint-slash",
    title: "Reduce Chemical Use",
    text: "Promote organic methods to protect the environment and reduce waste.",
  },
  {
    icon: "fa-seedling",
    title: "Improve Food Quality",
    text: "Enhance food quality, yield, and safety for healthier communities.",
  },
  {
    icon: "fa-shield-alt",
    title: "Build Climate Resilience",
    text: "Equip farmers with the tools to withstand and adapt to climate challenges.",
  },
];

const ChangemakerInBD = () => {
  return (
    <section
      id="changemaker"
      style={{
        paddingTop: "80px",
      }}
    >
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5">Changemakers in Bangladesh</h2>
        </div>
        <Row className="align-items-center mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <img
              src={tab}
              className="img-fluid rounded shadow"
              alt="A smiling Bangladeshi farmer in a field"
            />
          </Col>
          <Col lg={6}>
            <blockquote className="blockquote">
              <p className="mb-0 lead">
                "Thanks to Agritech Ventures, my land is now more fertile than
                ever. The soil testing and expert advice have doubled my
                harvest."
              </p>
              <footer className="blockquote-footer mt-2">
                A Farmer from a remote village
              </footer>
            </blockquote>
          </Col>
        </Row>

        <div className="text-center mt-5 pt-5 border-top">
          <h3 className="mb-3">Be Part of the Change</h3>
          <p className="lead text-muted mb-5">
            When you support Agri Tech Venture Ltd, you help:
          </p>
        </div>
        <Row>
          {benefits.map((benefit, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <Card className="h-100 text-center shadow-sm benefit-card">
                <Card.Body>
                  <div className="mb-3">
                    <i className={`fas ${benefit.icon} fa-3x text-success`}></i>
                  </div>
                  <Card.Title as="h5">{benefit.title}</Card.Title>
                  <Card.Text className="text-muted small">
                    {benefit.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ChangemakerInBD;
