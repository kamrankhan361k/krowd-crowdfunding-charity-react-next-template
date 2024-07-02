import { createContext, useContext } from "react";

const context = createContext({});

export const useRootContext = () => {
  return useContext(context);
};

export default context;
