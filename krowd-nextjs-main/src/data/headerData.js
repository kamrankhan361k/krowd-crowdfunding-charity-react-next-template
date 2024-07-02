import icon from "@/images/header-icon.png";
import logo2 from "@/images/logo-2.png";
import logo from "@/images/logo.png";

export const navItems = [
  {
    id: 1,
    name: "Home",
    href: "",
    subNavItems: [
      {
        id: 1,
        name: "Home 1",
        href: "/",
      },
      {
        id: 2,
        name: "Home 2",
        href: "/index-2",
      },
      {
        id: 3,
        name: "Home 3",
        href: "/index-3",
      },
    ],
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Explore",
    href: "",
    subNavItems: [
      { id: 1, name: "Project 1", href: "/projects-1" },
      { id: 2, name: "Project 2", href: "/projects-2" },
      { id: 3, name: "Single Project", href: "/single-project" },
    ],
  },
  {
    id: 4,
    name: "Pages",
    href: "",
    subNavItems: [
      { id: 1, name: "FAQ", href: "/faq" },
      { id: 2, name: "Gallery", href: "/gallery" },
      { id: 3, name: "Team Members", href: "/team-members" },
    ],
  },
  {
    id: 5,
    name: "News",
    href: "",
    subNavItems: [
      { id: 1, name: "News", href: "/news" },
      { id: 2, name: "Single News", href: "/single-news" },
    ],
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
  },
];

export const socials = [
  {
    id: 1,
    icon: "fa fa-facebook-square",
    href: "#",
  },
  {
    id: 2,
    icon: "fa fa-twitter",
    href: "#",
  },
  {
    id: 3,
    icon: "fa fa-instagram",
    href: "#",
  },
  {
    id: 4,
    icon: "fa fa-dribbble",
    href: "#",
  },
];

const headerData = {
  logo,
  logo2,
  icon,
  navItems,
  email: "needhelp@krowd.com",
  phone: "666 888 0000",
  address: "66 Broklyn Street, USA",
  socials,
};

export default headerData;
