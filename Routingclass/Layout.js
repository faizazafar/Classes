import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Mycard } from "./Mycard";

export const Layout = () => {
  return (
    <div>
      <Container fluid>

        <Row className="mt-3 px-auto">
          <Col>
            <Mycard></Mycard>
          </Col>
          <Col>
            <Mycard></Mycard>
          </Col>
          <Col>
            <Mycard></Mycard>
          </Col>
        </Row>
        {/* <Row>
          <Col>Slider</Col>
        </Row>
        <Row>
          <Col>Footer</Col>
        </Row> */}
      </Container>
    </div>
  );
};

// vector svg , docter.io NEXTJS
