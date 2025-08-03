import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const GetStarted = () => {
  return (
    <section
      id="get-started"
      style={{
        paddingTop: "80px",
        paddingBottom: "30px",
      }}
    >
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5">Your Impact Starts Here</h2>
          <p className="lead text-muted">
            Three simple ways you can make a difference today.
          </p>
        </div>
        <Row className="text-center">
          <Col md={4} className="mb-4">
            <div className="impact-item impact-item-hover">
              <div className="impact-icon-circle mx-auto mb-3">
                <i className="fas fa-bullhorn fa-2x"></i>
              </div>
              <h5>Support Our Campaign</h5>
              <p className="text-muted">
                Help us reach more farmers by contributing to our mission.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="impact-item impact-item-hover">
              <div className="impact-icon-circle mx-auto mb-3">
                <i className="fas fa-share-alt fa-2x"></i>
              </div>
              <h5>Share Our Story</h5>
              <p className="text-muted">
                Spread the word with your friends and family to grow our
                community.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="impact-item impact-item-hover">
              <div className="impact-icon-circle mx-auto mb-3">
                <i className="fas fa-hands-helping fa-2x"></i>
              </div>
              <h5>Be a Partner</h5>
              <p className="text-muted">
                Join us as we build a Halal and sustainable solution for a
                national challenge.
              </p>
            </div>
          </Col>
        </Row>
        <div className="text-center mt-5 pt-5 border-top">
          <p className="lead fw-bold">
            Together, let’s empower the hands that feed the nation—in the right
            way.
          </p>
          <a
            href="https://docs.google.com/forms/d/1VzI1xk9q1DbtIt0MohRhSbPysVcL_ZmZnkK7mJgKTtM/edit?ts=688efbf8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-lg mt-3"
          >
            Join the Movement
          </a>
        </div>
      </Container>
    </section>
  );
};

export default GetStarted;
