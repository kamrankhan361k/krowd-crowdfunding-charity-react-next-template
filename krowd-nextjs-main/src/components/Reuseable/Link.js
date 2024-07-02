import NextLink from "next/link";
import React from "react";

/**
 * @param {{children?:React.ReactNode}&React.HTMLAttributes<HTMLAnchorElement>&import("next/link").LinkProps} props
 */

const Link = ({
  children,
  href,
  replace,
  passHref,
  scroll,
  shallow,
  prefetch,
  locale,
  legacyBehavior,
  as,
  ...props
}) => {
  const linkProps = {
    href,
    replace,
    passHref,
    scroll,
    shallow,
    prefetch,
    locale,
    legacyBehavior,
    as,
  };
  return (
    <NextLink {...linkProps}>
      <a href={href} {...props}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
