import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <Container className="h-100 position-relative">
        <Row className="h-100 align-items-center justify-content-center text-center">
          <Col lg={10}>
            <div className="hero-text">
              <h1 className="display-3 text-white mb-4 fw-bold animate-fade-in-up">
                Sowing the Seeds of a Digital Agricultural Revolution
              </h1>
              <p
                className="lead text-light mb-5 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                We are transforming farming in Bangladesh with ethical,
                sustainable, and technologically advanced solutions rooted in
                Halal principles.
              </p>
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <Button
                  variant="success"
                  size="lg"
                  href="#about"
                  className="me-3 d-inline-flex align-items-center"
                >
                  <span className="me-2">Discover Our Mission</span>
                  <i className="fas fa-arrow-right"></i>
                </Button>
                <Button variant="outline-light" size="lg" href="#join-us">
                  Join Us
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
