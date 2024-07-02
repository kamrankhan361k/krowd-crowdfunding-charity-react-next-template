import AboutIntroduction from "@/components/AboutArea/AboutIntroduction";
import BrandAreaTwo from "@/components/BrandArea/BrandAreaTwo";
import FunFacts from "@/components/FunFacts/FunFacts";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NextBigThing from "@/components/NextBigThing/NextBigThing";
import PageTitle from "@/components/Reuseable/PageTitle";
import TeamMainArea from "@/components/TeamArea/TeamMainArea";
import TestimonialsArea from "@/components/Testimonials/TestimonialsArea";
import TogetherArea from "@/components/TogetherArea/TogetherArea";
import React from "react";

const About = () => {
  return (
    <Layout>
      <Header />
      <PageTitle title="About" parent="pages" />
      <AboutIntroduction />
      <FunFacts className="fun-facts-about-area" />
      <NextBigThing className="next-big-thing-about-area" />
      <TeamMainArea className="about-team-main-area" />
      <TogetherArea className="together-3-area" />
      <TestimonialsArea />
      <BrandAreaTwo />
    </Layout>
  );
};

export default About;
