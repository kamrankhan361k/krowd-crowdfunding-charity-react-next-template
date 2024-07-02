import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";

const SingleExploreProject = ({ project = {} }) => {
  const { image, tagline, date, title, raised } = project;

  return (
    <div className="explore-projects-item mt-30">
      <Image src={require(`src/assets/images/${image}`).default.src} alt="" />
      <div className="icon">
        <a href="#">
          <i className="fa fa-heart"></i>
        </a>
      </div>
      <div className="explore-projects-content">
        <div className="item d-flex align-items-center">
          <span>{tagline}</span>
          <p>
            <i className="fa fa-clock-o"></i> {date}
          </p>
        </div>
        <Link href="/single-project">
          <h3 className="title">{title}</h3>
        </Link>
        <div className="projects-range">
          <div className="projects-range-content">
            <ul>
              <li>Raised:</li>
              <li>{raised}%</li>
            </ul>
            <div className="range"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleExploreProject;
