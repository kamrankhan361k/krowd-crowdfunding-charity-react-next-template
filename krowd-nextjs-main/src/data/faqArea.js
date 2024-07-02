import bg from "@/images/faq-bg.jpg";

export const faqs = [
  {
    id: 1,
    title: "Is my campaign allowed on krowd?",
    text: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    id: 2,
    title: "How to soft launch your campaign?",
    text: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    id: 3,
    title: "How to turn visitors into contributors?",
    text: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    id: 4,
    title: "How can i find my campaign?",
    text: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
];

export const faqArea = {
  bg,
  tagline: "Frequently Asked Questions",
  title: "How Can We Help?",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Have you done google research which works all the time.",
  categories: [
    {
      id: 1,
      icon: "flaticon-handshake",
      text: "Backers",
      href: "#",
    },
    {
      id: 2,
      icon: "flaticon-computer",
      text: "Campaigns",
      href: "#",
    },
    {
      id: 3,
      icon: "flaticon-pay",
      text: "Payments",
      href: "#",
    },
  ],
  faqs,
};

export const faqTitleArea = {
  tagline: "Frequently Asked Questions",
  title: "How Can We Help?",
};

export const faqDesignArea = {
  navItems: [
    {
      id: 1,
      href: "pills-1",
      icon: "flaticon-handshake",
      name: "Backers",
    },
    {
      id: 2,
      href: "pills-2",
      icon: "flaticon-computer",
      name: "Campaigns",
    },
    {
      id: 3,
      href: "pills-3",
      icon: "flaticon-pay",
      name: "Payments",
    },
    {
      id: 4,
      href: "pills-4",
      icon: "flaticon-entrepreneur",
      name: "Entrepreneur",
    },
    {
      id: 5,
      href: "pills-5",
      icon: "flaticon-fingerprint-scan",
      name: "Legal",
    },
    {
      id: 6,
      href: "pills-6",
      icon: "flaticon-account",
      name: "Backers",
    },
  ],
  tabPane: [
    {
      id: "pills-1",
      faqsData: [faqs, faqs],
    },
    {
      id: "pills-2",
      faqsData: [faqs, faqs],
    },
    {
      id: "pills-3",
      faqsData: [faqs, faqs],
    },
    {
      id: "pills-4",
      faqsData: [faqs, faqs],
    },
    {
      id: "pills-5",
      faqsData: [faqs, faqs],
    },
    {
      id: "pills-6",
      faqsData: [faqs, faqs],
    },
  ],
};
