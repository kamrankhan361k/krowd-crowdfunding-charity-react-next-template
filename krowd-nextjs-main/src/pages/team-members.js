import CtaArea from "@/components/CtaArea/CtaArea";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";
import TeamMainArea from "@/components/TeamArea/TeamMainArea";
import React from "react";

const TeamMembers = () => {
  return (
    <Layout>
      <Header />
      <PageTitle title="Team Members" parent="pages" />
      <TeamMainArea className="about-team-main-area team-page-area" count={6} />
      <CtaArea />
    </Layout>
  );
};

export default TeamMembers;
