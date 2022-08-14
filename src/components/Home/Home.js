import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import google from "../../assets/apple.jpg";
import apple from "../../assets/google.jpg";
import Navigation from "../Navbar/Navbar";
import "./Home.css";
export default function Home() {
  return (
    <div>
      <Navigation />

      <div className="content">
        <Container>
          <Row>
            <Col >
              <div>
                <h2 className="banner-heading">
                  Seamless Payments <br /> Experiences for <br />
                  Everyone, Everywhere.
                </h2>

                <p>
                  Get good energy off your money and your everyday transactions
                  simplified with a MyChakra account. The MyChakra app allows
                  you send and receive money globally, pay bills instantly and
                  share gift tokens with friends and family.
                </p>
              </div>
              <div className="app-logo">
                <div >
                  <img  className="logos" src={google} alt="" />
                </div>
                <div >
                  <img  className="logos" src={apple} alt="" />
                </div>
              </div>
            </Col>
            <Col className="mobile-p" sm={6} xs={6}>
              <div className="pt-5">
              <div className="mobile ">
                       
                       </div>
              </div>
              

            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
