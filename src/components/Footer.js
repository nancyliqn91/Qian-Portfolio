import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer fixed-bottom">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={7} className="text-center text-sm-end">
            <div>
            <p>Copyright Qian Li 2023. All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;