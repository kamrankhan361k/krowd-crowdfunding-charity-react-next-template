import handleSubmit from "@/utils/handleSubmit";
import React from "react";
import { Col, Row } from "react-bootstrap";

const CommentForm = () => {
  const onSubmit = (data) => console.log(data);

  return (
    <div className="comment-form me-1">
      <h3 className="comment-one__block-title">Leave a Comment</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-one__form">
        <Row>
          <Col lg={6}>
            <div className="input-box">
              <input type="text" placeholder="Name" name="name" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="input-box">
              <input type="text" placeholder="Email" name="email" />
            </div>
          </Col>
          <Col lg={12}>
            <div className="input-box">
              <textarea placeholder="Write Comment" name="message"></textarea>
            </div>
          </Col>
          <Col lg={12} className="text-left">
            <div className="input-box">
              <button type="submit" className="main-btn">
                Submit comment
              </button>
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default CommentForm;
