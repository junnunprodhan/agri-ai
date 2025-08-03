import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <section
      id="about"
      style={{
        paddingTop: "80px",
        paddingBottom: "30px",
      }}
      className=" bg-light"
    >
      <Container>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-heading">About Us</h2>
            <hr className="my-4" />
            <p className="lead">
              At Agri Tech Venture Ltd, we believe that every farmer—no matter
              how remote—deserves access to the tools, knowledge, and support
              that can transform their harvest and their lives.We’re not just
              talking about agriculture. We’re talking about food security,
              climate resilience, and rural prosperity—built on Halal
              principles.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
