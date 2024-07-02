import BrandAreaTwo from "@/components/BrandArea/BrandAreaTwo";
import FaqDesignArea from "@/components/FaqArea/FaqDesignArea";
import FaqTitleArea from "@/components/FaqArea/FaqTitleArea";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";
import React from "react";

const Faq = () => {
  return (
    <Layout>
      <Header />
      <PageTitle title="FAQs" parent="pages" />
      <FaqTitleArea />
      <FaqDesignArea />
      <BrandAreaTwo />
    </Layout>
  );
};

export default Faq;
