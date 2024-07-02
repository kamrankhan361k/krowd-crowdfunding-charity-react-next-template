import { useCallback, useState } from "react";

/**
 * @param {boolean} defaultValue
 * @returns {[boolean, (value?: boolean) => void]}
 */

const useToggle = (defaultValue = false) => {
  const [toggle, setToggle] = useState(defaultValue);

  /**
   * @param {boolean} value
   */
  const toggler = useCallback((value = undefined) => {
    setToggle((preToggle) => (typeof value === "boolean" ? value : !preToggle));
  }, []);

  return [toggle, toggler];
};

export default useToggle;
