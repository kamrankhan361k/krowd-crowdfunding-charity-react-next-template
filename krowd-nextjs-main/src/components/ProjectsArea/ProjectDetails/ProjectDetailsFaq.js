import Faqs from "@/components/FaqArea/Faqs";
import { projectDetailsFaq } from "@/data/projectsArea";
import React from "react";

const { faqs, id } = projectDetailsFaq;

const ProjectDetailsFaq = ({ getClassName }) => {
  return (
    <div className={getClassName(id)} id={id} role="tabpanel">
      <Faqs faqs={faqs} className="mt-70" />
    </div>
  );
};

export default ProjectDetailsFaq;
