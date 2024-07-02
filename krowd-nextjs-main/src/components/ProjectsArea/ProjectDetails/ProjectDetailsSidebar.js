import { projectDetailsSidebar } from "@/data/projectsArea";
import React from "react";
import { Image } from "react-bootstrap";

const { info, perks } = projectDetailsSidebar;

const ProjectDetailsPark = ({ perk = {} }) => {
  const { id, image, sold, off, amount, date, claimed, totalClaimed } = perk;

  return (
    <div
      className={`project-details-park mt-30 box${id === 2 ? " item-2" : ""}`}
    >
      <h4 className="title">Select a Perk</h4>
      {image && <Image src={image.src} alt="" />}
      <span>SAPPHIRE({sold} sold already)</span>
      <p>
        ${amount} ({off}% OFF)
      </p>
      <ul>
        <li>Estimated Shipping</li>
        <li>
          <span>{date}</span>
        </li>
        <li>
          {claimed} out of {totalClaimed} <span>claimed</span>
        </li>
      </ul>
      <a className="main-btn" href="#">
        Continue now
      </a>
    </div>
  );
};

const ProjectDetailsSidebar = () => {
  return (
    <div className="project-details-sidebar">
      <div className="project-details-info mt-70 box">
        <div className="info">
          <Image src={info.image.src} alt="" />
          <h5 className="title">{info.name}</h5>
          <span>{info.backed} backed</span>
        </div>
        <p>{info.text}</p>
      </div>
      {perks.map((perk) => (
        <ProjectDetailsPark perk={perk} key={perk.id} />
      ))}
    </div>
  );
};

export default ProjectDetailsSidebar;
