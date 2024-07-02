import React from "react";
import { Col } from "react-bootstrap";
import VisibilityCountUp from "../Reuseable/VisibilityCountUp";

const FunFactsItem = ({ fact = {} }) => {
  const { icon, count, text } = fact;

  return (
    <Col lg={3} md={6}>
      <div className="fun-facts-item text-center">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <br />
        <h4 className="title odometer">
          <VisibilityCountUp count={count} />
        </h4>
        <span>{text}</span>
      </div>
    </Col>
  );
};

export default FunFactsItem;
