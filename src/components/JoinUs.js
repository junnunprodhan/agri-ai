import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const JoinUs = () => {
  return (
    <section
      id="join-us"
      className="py-5 text-white"
      style={{ backgroundColor: "#343a40" }}
    >
      <Container>
        <Row>
          <Col lg={6} className="pe-lg-5 mb-5 mb-lg-0">
            <h2 className="display-5 fw-bold mb-4">
              Let's Build the Future, Together.
            </h2>
            <p className="lead mb-4">
              Your voice matters. Whether you have a question, a partnership
              idea, or want to learn more about our mission, we're here to
              listen. Fill out the form, and a member of our team will get back
              to you soon.
            </p>
            <div className="mb-4">
              <h4 className="fw-light mb-3">Contact Information</h4>
              <p className="mb-2">
                <i className="fas fa-map-marker-alt me-3"></i>Dhaka, Bangladesh
              </p>
              <p className="mb-2">
                <i className="fas fa-phone-alt me-3"></i>+880 123 456 7890
              </p>
              <p className="mb-2">
                <i className="fas fa-envelope me-3"></i>info@agritech.com
              </p>
            </div>
            <div>
              <h4 className="fw-light mb-3">Follow Our Journey</h4>
              <a href="https://facebook.com" className="text-white me-3">
                <i className="fab fa-facebook-f fa-2x"></i>
              </a>
              <a href="https://twitter.com" className="text-white me-3">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://linkedin.com" className="text-white me-3">
                <i className="fab fa-linkedin-in fa-2x"></i>
              </a>
              <a href="https://instagram.com" className="text-white">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <h3 className="mb-4">Send Us a Message</h3>
            <Form>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="john.doe@example.com"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g., Investment Inquiry"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Tell us how we can help..."
                />
              </Form.Group>
              <Button
                variant="success"
                type="submit"
                size="lg"
                className="w-100"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JoinUs;
