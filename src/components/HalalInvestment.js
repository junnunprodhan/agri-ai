import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import backgroundImage from "../images/money2.png";
const investmentPoints = [
  {
    icon: "fa-seedling",
    text: "Supports farmers with season-long digital advisory services.",
  },
  {
    icon: "fa-vial",
    text: "Equips local agents with tools to deliver real-time soil diagnostics.",
  },
  {
    icon: "fa-broadcast-tower",
    text: "Deploys hyperlocal weather stations in climate-risk areas.",
  },
  {
    icon: "fa-chalkboard-teacher",
    text: "Trains farmers in sustainable, efficient, and Halal-compliant farming practices.",
  },
];

const HalalInvestment = () => {
  return (
    <section
      id="halal-investment"
      style={{
        paddingTop: "80px",
      }}
      className=" bg-light"
    >
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5">Halal Investment in Bangladesh</h2>
          <p className="lead text-muted">
            An ethical and impactful way to grow your wealth and our
            communities.
          </p>
        </div>
        <Row className="align-items-center">
          {/* <Col
            style={{ backgroundImage: `url(${backgroundImage})` }}
            lg={6}
            className="mb-4 mb-lg-0"
          >
            <h3 className="mb-4">Where Your Money Goes</h3>
            <div className="investment-points-container">
              {investmentPoints.map((point, index) => (
                <div
                  key={index}
                  className="d-flex align-items-start investment-point mb-4"
                >
                  <div className="investment-point-icon me-3">
                    <i className={`fas ${point.icon} fa-2x text-success`}></i>
                  </div>
                  <div className="investment-point-text">
                    <p className="mb-0">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col> */}
          <Col lg={6} className="position-relative overflow-hidden">
            <div
            // style={{
            //   backgroundImage: `url(${backgroundImage})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            //   position: "absolute",
            //   top: 0,
            //   left: 0,
            //   width: "100%",
            //   height: "100%",
            //   opacity: 0.5,
            //   zIndex: 0,
            // }}
            ></div>

            <div className="position-relative p-4 h-100">
              <h3 className="mb-4">Where Your Money Goes</h3>
              <div className="investment-points-container">
                {investmentPoints.map((point, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-start investment-point mb-4"
                  >
                    <div className="investment-point-icon me-3">
                      <i className={`fas ${point.icon} fa-2x text-success`}></i>
                    </div>
                    <div className="investment-point-text">
                      <p className="mb-0">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          {/* <Col lg={6} className=" position-relative overflow-hidden">
            <div
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0.5,
                zIndex: 0,
              }}
            ></div>
            <div className="position-relative p-4">
              <h3 className="mb-4">Where Your Money Goes</h3>
              <div className="investment-points-container">
                {investmentPoints.map((point, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-start investment-point mb-4"
                  >
                    <div className="investment-point-icon me-3">
                      <i className={`fas ${point.icon} fa-2x text-success`}></i>
                    </div>
                    <div className="investment-point-text">
                      <p className="mb-0">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col> */}
          <Col lg={6}>
            <div className="p-4 bg-white rounded shadow-sm">
              <div className="text-center mb-3">
                <i className="fas fa-balance-scale-right fa-3x text-success"></i>
              </div>
              <h3 className="mb-3 text-center">The Mudarabah Model</h3>
              <p className="text-muted text-justify">
                This is a Halal investment structured under the Mudarabah model,
                where the Investor contributes capital and the Company manages
                the business. Profits are shared according to a pre-agreed
                ratio, ensuring strict adherence to Islamic financial
                principles.
              </p>
              <p className="text-muted text-justify">
                It is a lasting investment with high social and financial profit
                sharing, where ethical finance and sustainable agriculture grow
                hand in hand.
              </p>
              <div className="text-center mt-4">
                <a
                  href="https://docs.google.com/forms/d/1VzI1xk9q1DbtIt0MohRhSbPysVcL_ZmZnkK7mJgKTtM/edit?ts=688efbf8"
                  className="btn btn-success btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Invest Now
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HalalInvestment;
