import React from "react";
import NavItem from "./NavItem";

const HeaderMenu = ({ navItems = [] }) => {
  return (
    <div className="header-menu d-none d-lg-block">
      <ul>
        {navItems.map((navItem) => (
          <NavItem key={navItem.id} navItem={navItem} />
        ))}
      </ul>
    </div>
  );
};

export default HeaderMenu;
