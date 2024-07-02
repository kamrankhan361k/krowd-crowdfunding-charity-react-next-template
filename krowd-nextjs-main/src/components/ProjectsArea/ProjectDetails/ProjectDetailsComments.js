import CommentForm from "@/components/NewsArea/BlogDetails/CommentForm";
import CommentOne from "@/components/NewsArea/BlogDetails/CommentOne";
import { projectDetailsComments } from "@/data/projectsArea";
import React from "react";

const { id, comments } = projectDetailsComments;

const ProjectDetailsComments = ({ getClassName }) => {
  return (
    <div className={getClassName(id)} id="pills-4" role="tabpanel">
      <CommentOne comments={comments} className="mt-50" />
      <CommentForm />
    </div>
  );
};

export default ProjectDetailsComments;
