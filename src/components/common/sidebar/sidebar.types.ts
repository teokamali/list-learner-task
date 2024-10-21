import { ReactElement } from "react";

export interface ISidebarNavItem {
   title: string;
   slug: string;
   disabled: boolean;
   icon: ReactElement;
}
