// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import impactFinancingModel from "../images/impact_financing_model.png";
// import backgroundImage from "../images/money2.png";
// import "./GetInvolved.css";
// const GetInvolved = () => {
//   return (
//     <section
//       id="get-involved"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//       }}
//       className="py-5"
//     >
//       <Container>
//         <Row className="align-items-center">
//           <Col lg={6} className="mb-4 mb-lg-0">
//             <h2 className="display-5 mb-4   ">The Challenge</h2>
//             <p className="lead   ">
//               Over 7 million smallholder farmers in Bangladesh face:
//             </p>
//             <ul className="list-unstyled">
//               <li className="mb-3 d-flex align-items-start">
//                 <i className="fas fa-history fa-2x text-danger me-3"></i>
//                 <div>
//                   <h5 className="  ">Outdated farming methods</h5>
//                   <p className="   ">
//                     Traditional practices often result in lower yields and soil
//                     degradation.
//                   </p>
//                 </div>
//               </li>
//               <li className="mb-3 d-flex align-items-start">
//                 <i className="fas fa-cloud-showers-heavy fa-2x text-danger me-3"></i>
//                 <div>
//                   <h5 className="  ">Unpredictable climate events</h5>
//                   <p className="   ">
//                     Increased frequency of floods and droughts threatens
//                     livelihoods.
//                   </p>
//                 </div>
//               </li>
//               <li className="mb-3 d-flex align-items-start">
//                 <i className="fas fa-store-slash fa-2x text-danger me-3"></i>
//                 <div>
//                   <h5 className="  ">
//                     Limited access to modern tools and markets
//                   </h5>
//                   <p className="   ">
//                     Lack of access to technology and fair markets keeps farmers
//                     in a cycle of poverty.
//                   </p>
//                 </div>
//               </li>
//             </ul>
//             <p className="lead mt-4   ">
//               We’re here to change that—with your help.
//             </p>
//           </Col>
//           <Col lg={6} className="text-center   ">
//             <h3 className="mb-3">Introducing Our Impact Financing Model</h3>
//             <img
//               src={impactFinancingModel}
//               className="img-fluid rounded shadow-lg"
//               alt="Impact Financing Model Diagram"
//             />
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default GetInvolved;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import impactFinancingModel from "../images/impact_financing_model.png";
import backgroundImage from "../images/Money.png";
import "./GetInvolved.css";

const GetInvolved = () => {
  return (
    <section id="get-involved" className="get-involved-section py-5">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <Container className="position-relative">
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="display-5 mb-4   ">The Challenge</h2>
            <p className="lead   ">
              Over 7 million smallholder farmers in Bangladesh face:
            </p>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <i className="fas fa-history fa-2x text-danger me-3"></i>
                <div>
                  <h5 className="  ">Outdated farming methods</h5>
                  <p className="  ">
                    Traditional practices often result in lower yields and soil
                    degradation.
                  </p>
                </div>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <i className="fas fa-cloud-showers-heavy fa-2x text-danger me-3"></i>
                <div>
                  <h5 className="  ">Unpredictable climate events</h5>
                  <p className="  ">
                    Increased frequency of floods and droughts threatens
                    livelihoods.
                  </p>
                </div>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <i className="fas fa-store-slash fa-2x text-danger me-3"></i>
                <div>
                  <h5 className="  ">
                    Limited access to modern tools and markets
                  </h5>
                  <p className="  ">
                    Lack of access to technology and fair markets keeps farmers
                    in a cycle of poverty.
                  </p>
                </div>
              </li>
            </ul>
            <p className="lead mt-4   ">
              We’re here to change that—with your help.
            </p>
          </Col>
          <Col lg={6} className="text-center   ">
            <h3 className="mb-3">Introducing Our Impact Financing Model</h3>
            <img
              src={impactFinancingModel}
              className="img-fluid rounded shadow-lg"
              alt="Impact Financing Model Diagram"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GetInvolved;
