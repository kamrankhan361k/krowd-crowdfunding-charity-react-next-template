import React from "react";

/**
 * @param {{title?:string;tagline?:string;children?:React.ReactNode}&React.HTMLAttributes<HTMLDivElement>} props
 */

const Title = ({
  title = "",
  tagline = "",
  children,
  className = "",
  ...props
}) => {
  return (
    <div className={`section-title ${className}`} {...props}>
      {tagline && <span>{tagline}</span>}
      <h3 className="title">{title || children}</h3>
    </div>
  );
};

export default Title;
