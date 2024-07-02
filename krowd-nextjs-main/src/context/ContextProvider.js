import useToggle from "@/hooks/useToggle";
import React from "react";
import context from "./context";

const ContextProvider = ({ children }) => {
  const [menuStatus, toggleMenu] = useToggle(false);
  const [openSearch, toggleSearch] = useToggle(false);

  const value = {
    menuStatus,
    toggleMenu,
    openSearch,
    toggleSearch,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
