import bg from "@/images/footer-bg.jpg";
import shape from "@/images/footer-shape.png";
import logo from "@/images/logo-2.png";

export const socials2 = [
  {
    id: 1,
    icon: "fa fa-twitter",
    href: "#",
  },
  {
    id: 2,
    icon: "fa fa-facebook-official",
    href: "#",
  },
  {
    id: 3,
    icon: "fa fa-pinterest",
    href: "#",
  },
  {
    id: 4,
    icon: "fa fa-instagram",
    href: "#",
  },
];

const footerData = {
  logo,
  bg,
  socials: socials2,
  text: "Lorem quas utamur delicata qui, vix ei prima mentitum omnesque. Duo corrumpit cotidieque ne.",
  text2:
    "Sign up for our latest news & articles. We won’t give you spam mails.",
  shape,
  links: [
    {
      id: 1,
      text: "About us",
      href: "/about",
    },
    {
      id: 2,
      text: "How It Works",
      href: "/team",
    },
    {
      id: 3,
      text: "Knowledge hub",
      href: "/case",
    },
    {
      id: 4,
      text: "Success Stories",
      href: "/blog",
    },
    {
      id: 5,
      text: "Contact",
      href: "/contact",
    },
    {
      id: 6,
      text: "Education",
      href: "/about",
    },
    {
      id: 7,
      text: "Design",
      href: "/about",
    },
    {
      id: 8,
      text: "Film & Video",
      href: "/about",
    },
    {
      id: 9,
      text: "Technology",
      href: "/about",
    },
    {
      id: 10,
      text: "Games",
      href: "/about",
    },
  ],
  author: "Krowd",
  year: new Date().getFullYear(),
};

export default footerData;
