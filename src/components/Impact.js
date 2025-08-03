import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Impact = () => {
  return (
    <section id="changemakers" className="py-5 bg-light">
      <Container>
        <div className="text-center">
          <h2 className="section-heading">Our Impact</h2>
          <p className="section-subheading">Real stories from the heart of Bangladesh.</p>
        </div>
        <Row className="align-items-center">
          <Col lg={5}>
            <img 
              src="https://images.pexels.com/photos/2343513/pexels-photo-2343513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              className="img-fluid rounded shadow" 
              alt="A smiling Bangladeshi farmer" 
            />
          </Col>
          <Col lg={7}>
            <div className="changemaker-quote ps-lg-5">
              <i className="fas fa-quote-left fa-2x text-success mb-3"></i>
              <blockquote className="blockquote fs-5">
                <p>
                  "Thanks to Agritech Ventures, my land is now more fertile than ever. The soil testing and expert advice have doubled my harvest."
                </p>
              </blockquote>
              <cite className="fs-6 fw-bold">— A Farmer from a remote village</cite>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Impact;
