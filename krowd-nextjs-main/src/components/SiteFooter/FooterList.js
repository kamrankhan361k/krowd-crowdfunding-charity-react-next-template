import React from "react";
import { Col } from "react-bootstrap";

const FooterList = ({ title = "", list = [] }) => {
  return (
    <Col lg={2} md={6} sm={6}>
      <div className="footer-list mt-30">
        <div className="footer-title">
          <h4 className="title">{title}</h4>
          <ul>
            {list.map(({ id, text, href }) => (
              <li key={id}>
                <a href={href}>{text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Col>
  );
};

export default FooterList;
