import ContactFormArea from "@/components/ContactArea/ContactFormArea";
import ContactInfoArea from "@/components/ContactArea/ContactInfoArea";
import ContactMap from "@/components/ContactArea/ContactMap";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";
import React from "react";

const Contact = () => {
  return (
    <Layout>
      <Header />
      <PageTitle title="Contact" />
      <ContactFormArea />
      <ContactInfoArea />
      <ContactMap />
    </Layout>
  );
};

export default Contact;
