import React from "react";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  return (
    <nav className={`${cotainerStyles}`}>
      Nav
      {links.map((link, index))}
    </nav>
  );
};

export default Nav;
