import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import ExploreProjectsThree from "@/components/ProjectsArea/ExploreProjectsThree";
import PageTitle from "@/components/Reuseable/PageTitle";
import React from "react";

const Projects2 = () => {
  return (
    <Layout>
      <Header />
      <PageTitle title="Explore" />
      <ExploreProjectsThree />
    </Layout>
  );
};

export default Projects2;
