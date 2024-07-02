import { useRootContext } from "@/context/context";
import React from "react";
import { Image } from "react-bootstrap";
import SearchIcon from "./SearchIcon";
import Social from "./Social";

const HeaderInfo = ({ socials, icon, phone = "", searchColor }) => {
  const { toggleMenu, toggleSearch } = useRootContext();

  return (
    <div className="header-info d-flex align-items-center">
      {socials && <Social socials={socials} />}
      <div className="search d-none d-lg-block">
        <a className="cursor-pointer" onClick={toggleSearch}>
          <SearchIcon color={searchColor} />
        </a>
      </div>
      <div className="info d-none d-sm-block">
        <Image src={icon.src} alt="" />
        <span>Call Anytime</span>
        <h5 className="title">{phone}</h5>
      </div>
      <div
        onClick={toggleMenu}
        className="toggle-btn ml-30 canvas_open d-lg-none d-block"
      >
        <i className="fa fa-bars"></i>
      </div>
    </div>
  );
};

export default HeaderInfo;
