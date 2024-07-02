import AboutArea from "@/components/AboutArea/AboutArea";
import BannerSlider from "@/components/BannerSlider/BannerSlider";
import BrandAreaTwo from "@/components/BrandArea/BrandAreaTwo";
import ClientArea from "@/components/ClientArea/ClientArea";
import FaqArea from "@/components/FaqArea/FaqArea";
import HeaderTwo from "@/components/Header/HeaderTwo";
import Layout from "@/components/Layout/Layout";
import NewsArea from "@/components/NewsArea/NewsArea";
import NextBigThing from "@/components/NextBigThing/NextBigThing";
import PortfolioArea from "@/components/PortfolioArea/PortfolioArea";
import ProjectsArea from "@/components/ProjectsArea/ProjectsArea";
import TechArea from "@/components/TechArea/TechArea";
import TogetherArea from "@/components/TogetherArea/TogetherArea";
import React from "react";

const Home2 = () => {
  return (
    <Layout>
      <HeaderTwo />
      <BannerSlider className="banner-2-area" isBannerTwo />
      <AboutArea />
      <ProjectsArea className="explore-projects-2-area" />
      <PortfolioArea />
      <FaqArea />
      <ClientArea />
      <NextBigThing />
      <TogetherArea className="together-2-area" />
      <TechArea />
      <NewsArea className="news-2-area" newsTwo />
      <BrandAreaTwo />
    </Layout>
  );
};

export default Home2;
