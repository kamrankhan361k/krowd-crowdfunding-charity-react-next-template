import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import GalleryPage from "@/components/PortfolioArea/GalleryPage";
import PageTitle from "@/components/Reuseable/PageTitle";
import React from "react";

const gallery = () => {
  return (
    <Layout>
      <Header />
      <PageTitle title="Gallery" parent="pages" />
      <GalleryPage />
    </Layout>
  );
};

export default gallery;
