import { newsArea } from "@/data/newsArea";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import NewsItem from "./NewsItem";

const { tagline, title, newses } = newsArea;

const NewsArea = ({ className = "", newsTwo = false, newsPage = false }) => {
  return (
    <section className={`news-area ${className}`}>
      <Container>
        {!newsPage && (
          <Row className="justify-content-center">
            <Col lg={6}>
              <Title title={title} tagline={tagline} className="text-center" />
            </Col>
          </Row>
        )}
        <Row className={newsTwo ? "" : "no-gutters"}>
          {newses
            .slice(0, newsPage ? undefined : newsTwo ? 3 : 4)
            .map((news, index) => (
              <NewsItem
                key={news.id}
                news={news}
                index={index}
                newsTwo={newsTwo}
              />
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default NewsArea;
