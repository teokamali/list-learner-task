import { IconBook, IconCategory, IconMicrophone, IconSearch } from "@tabler/icons-react";
import { ISidebarNavItem } from "./sidebar.types";

export const sidebarRoutes: ISidebarNavItem[] = [
   {
      title: "Podcasts",
      slug: "/",
      disabled: false,
      icon: <IconMicrophone size={20} />,
   },
   {
      title: "Books",
      slug: "/books",
      disabled: false,
      icon: <IconBook size={20} />,
   },
   {
      title: "Categories",
      slug: "/categories",
      disabled: true,
      icon: <IconCategory size={20} />,
   },
   {
      title: "Search",
      slug: "/search",
      disabled: true,
      icon: <IconSearch size={20} />,
   },
];
