import React from "react";

const Social = ({ socials = [] }) => {
  return (
    <div className="social">
      <ul>
        {socials.map(({ id, icon, href }) => (
          <li key={id}>
            <a href={href}>
              <i className={icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
