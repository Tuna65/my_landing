import { IoDocumentText, IoHome, IoMail, IoNewspaper } from "react-icons/io5";

export const getIconForLabel = (label: string) => {
  switch (label) {
    case "Home":
      return <IoHome className="text-2xl" />;
    case "Blog":
      return <IoNewspaper className="text-2xl" />;
    case "Single Post":
      return <IoDocumentText className="text-2xl" />;
    case "Pages":
      return <IoNewspaper className="text-2xl" />;
    case "Contact":
      return <IoMail className="text-2xl" />;
    default:
      return <IoHome className="text-2xl" />;
  }
};

export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export const navItems: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  {
    label: "Blog",
    href: "/blog",
    // subItems: [
    //   { label: "Travel News", href: "/blog" },
    //   { label: "Adventure Stories", href: "/blog/adventure" },
    //   { label: "Travel Tips", href: "/blog/tips" },
    //   { label: "Destinations", href: "/blog/destinations" },
    // ],
  },
  { label: "Tiện ích", href: "/tien-ich" },
  { label: "Game", href: "/game" },
];

export const footerItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Tiện ích", href: "/Tiện ích" },
  { label: "Game", href: "/game" },
];

export const categoryItems = [
  { label: "Lifestyle", href: "/category/lifestyle" },
  { label: "Technology", href: "/category/technology" },
  { label: "Travel", href: "/category/travel" },
];
