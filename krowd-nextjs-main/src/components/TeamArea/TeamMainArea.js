import { teamMainArea } from "@/data/teamArea";
import React from "react";
import { Container, Row } from "react-bootstrap";
import TeamItem from "./TeamItem";

const TeamMainArea = ({ className = "", count = 3 }) => {
  return (
    <div className={`team-main-area ${className}`}>
      <Container>
        <Row className="justify-content-center">
          {teamMainArea.slice(0, count).map((team) => (
            <TeamItem key={team.id} team={team} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TeamMainArea;
