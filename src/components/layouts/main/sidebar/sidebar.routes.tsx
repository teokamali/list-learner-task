import { IconBook, IconCategory, IconMicrophone, IconSearch } from "@tabler/icons-react";
import { ISidebarNavItem } from "./sidebar.types";

export const sidebarRoutes: ISidebarNavItem[] = [
   {
      title: "Podcasts",
      slug: "/",
      disabled: false,
      icon: <IconMicrophone />,
   },
   {
      title: "Books",
      slug: "/books",
      disabled: false,
      icon: <IconBook />,
   },
   {
      title: "Categories",
      slug: "/categories",
      disabled: true,
      icon: <IconCategory />,
   },
   {
      title: "Search",
      slug: "/search",
      disabled: true,
      icon: <IconSearch />,
   },
];
