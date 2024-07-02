import Head from "next/head";
import React from "react";
import OffCanvasMenu from "../Header/OffCanvasMenu";
import SearchPopup from "../Header/SearchPopup";
import SiteFooter from "../SiteFooter/SiteFooter";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Krowd - Crowdfunding Projects & Charity NextJS Template</title>
      </Head>
      <main id="wrapper" className="animated fadeIn">
        {children}
        <SiteFooter />
      </main>
      <OffCanvasMenu />
      <SearchPopup />
      <ScrollToTop />
    </>
  );
};

export default Layout;
