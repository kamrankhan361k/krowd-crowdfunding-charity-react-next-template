import { nextBigThing } from "@/data/nextBigThing";
import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const { tagline, title, tabs, text, image, lists } = nextBigThing;

const NavItem = ({ tab = {}, current, handleCurrent }) => {
  const { tagline, id } = tab;
  const active = id === current;

  return (
    <li className="nav-item" role="presentation">
      <a
        onClick={() => handleCurrent(id)}
        className={`nav-link cursor-pointer${active ? " active" : ""}`}
        role="tab"
      >
        {tagline}
      </a>
    </li>
  );
};

const TabContent = ({ tab = {}, current }) => {
  const { id, text } = tab;
  const active = id === current;

  return (
    <div
      className={`tab-pane animated${active ? " fadeIn show active" : ""}`}
      id={id}
    >
      <p>{text}</p>
    </div>
  );
};

const NextBigThing = ({ className = "" }) => {
  const [current, setCurrent] = useState("pills-home");

  const handleCurrent = (current) => {
    setCurrent(current);
  };

  return (
    <section className={`next-big-thing-area ${className}`}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="next-big-thing-content">
              <span>{tagline}</span>
              <h3 className="title">{title}</h3>
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                {tabs.map((tab) => (
                  <NavItem
                    key={tab.id}
                    tab={tab}
                    current={current}
                    handleCurrent={handleCurrent}
                  />
                ))}
              </ul>
              <div className="tab-content" id="pills-tabContent">
                {tabs.map((tab) => (
                  <TabContent key={tab.id} tab={tab} current={current} />
                ))}
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="next-big-thing-content-2">
              <p>{text}</p>
              <div className="next-big-thing-list">
                <div className="thumb">
                  <Image src={image.src} alt="" />
                </div>
                <div className="list">
                  <ul>
                    {lists.map((list, i) => (
                      <li key={i}>
                        <i className="flaticon-check"></i> {list}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NextBigThing;
