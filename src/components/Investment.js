import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const investmentPoints = [
  {
    icon: "fa-seedling",
    text: "Supports farmers with season-long digital advisory.",
  },
  {
    icon: "fa-vial",
    text: "Equips local agents with real-time soil diagnostics.",
  },
  {
    icon: "fa-broadcast-tower",
    text: "Deploys hyperlocal weather stations in climate-risk areas.",
  },
  {
    icon: "fa-chalkboard-teacher",
    text: "Trains farmers in sustainable and Halal-compliant practices.",
  },
];

const Investment = () => {
  return (
    <section id="investment" className="investment-section">
      <Container>
        <div className="text-center">
          <h2 className="section-heading">Ethical & Impactful Investment</h2>
          <p className="section-subheading">
            A Halal investment model for a prosperous agricultural future.
          </p>
        </div>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="pe-lg-5">
              <h4 className="mb-4">Where Your Money Goes</h4>
              {investmentPoints.map((point, index) => (
                <div key={index} className="investment-point">
                  <i className={`fas ${point.icon} fa-lg`}></i>
                  <p className="mb-0">{point.text}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6}>
            <div className="bg-light p-5 rounded">
              <h4 className="mb-3">The Mudarabah Model</h4>
              <p className="text-muted small">
                This is a Halal investment structured under the Mudarabah model,
                where the Investor contributes capital and the Company manages
                the business. Profits are shared according to a pre-agreed
                ratio, and the investment carries no element of interest (Riba),
                ensuring strict adherence to Islamic financial principles.
              </p>
              <p className="text-muted small">
                It is a lasting investment with high social and financial profit
                sharing. You're not just funding a project—you're making a Halal
                investment in a future where ethical finance and sustainable
                agriculture grow hand in hand.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Investment;
