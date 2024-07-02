import headerData from "@/data/headerData";
import useScroll from "@/hooks/useScroll";
import React from "react";
import { Container } from "react-bootstrap";
import MainHeaderItem from "./MainHeaderItem";

const { logo2, navItems, phone, icon, socials } = headerData;

const HeaderTwo = () => {
  const { scrollTop } = useScroll(160);

  return (
    <header className="header-area header-2-area">
      <div className={`main-header${scrollTop ? " sticky" : ""}`}>
        <Container fluid className="p-0">
          <MainHeaderItem
            logo={logo2}
            navItems={navItems}
            icon={icon}
            phone={phone}
            socials={socials}
            searchColor="#fff"
          />
        </Container>
      </div>
    </header>
  );
};

export default HeaderTwo;
