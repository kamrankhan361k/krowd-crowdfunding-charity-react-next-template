import AboutAreaThree from "@/components/AboutArea/AboutAreaThree";
import BannerSlider from "@/components/BannerSlider/BannerSlider";
import BrandAreaTwo from "@/components/BrandArea/BrandAreaTwo";
import Categories from "@/components/Categories/Categories";
import CtaArea from "@/components/CtaArea/CtaArea";
import EasyStepsArea from "@/components/EasyStepsArea/EasyStepsArea";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsArea from "@/components/NewsArea/NewsArea";
import ExploreProjects from "@/components/ProjectsArea/ExploreProjects";
import ProjectArea from "@/components/ProjectsArea/ProjectArea";
import SuperstarsArea from "@/components/SuperstarsArea/SuperstarsArea";
import TogetherArea from "@/components/TogetherArea/TogetherArea";
import React from "react";

const Home3 = () => {
  return (
    <Layout>
      <Header className="header-3-area" />
      <BannerSlider className="banner-3-slider" isBannerThree />
      <SuperstarsArea />
      <AboutAreaThree />
      <CtaArea />
      <ExploreProjects />
      <EasyStepsArea />
      <Categories />
      <TogetherArea className="together-3-area" />
      <NewsArea className="news-2-area news-3-area" newsTwo />
      <BrandAreaTwo className="brand-area-3" />
      <ProjectArea />
    </Layout>
  );
};

export default Home3;
