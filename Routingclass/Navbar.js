import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Row className="p-2 bg-primary text-white justify-content-center">
      <Col>
        <Link to="/" className="text-white  text-decoration-none  ">
          Home
        </Link>
      </Col>
      <Col>
        <Link to="/about" className="text-white  text-decoration-none">
          About
        </Link>
      </Col>
      <Col>
        <Link to="/contact" className="text-white text-decoration-none">
          Contact
        </Link>
      </Col>
    </Row>
  );
};
