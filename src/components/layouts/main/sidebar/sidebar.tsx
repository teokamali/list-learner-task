import { Avatar } from "@/components/common/avatar/avatar";
import { useAppSelector } from "@/store/store";
import { IconBookmark } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import FilteredList from "../filteredList/filteredList";
import { sidebarRoutes } from "./sidebar.routes";

const Sidebar = () => {
   const { user } = useAppSelector((state) => state.auth);
   const { pathname } = useRouter();
   console.log(pathname);
   return (
      <div className="pr-1 flex flex-col gap-1 h-full">
         {/* First Part */}
         <div className="bg-background p-1">
            {user ? (
               <div className="flex items-center gap-2 py-4 px-3">
                  <Avatar
                     size="lg"
                     alt={user.name}
                     src={user.avatar}
                  />
                  <h4 className="text-base font-semibold">{user.name}</h4>
               </div>
            ) : (
               <></>
            )}
            <div className="px-1 mt-1">
               <hr className="" />
            </div>
            <ul className="flex flex-col gap-2 mt-2 py-2 pt-0">
               {sidebarRoutes.map((item) => {
                  const isActive = item.slug === pathname;
                  if (item.disabled) {
                     return (
                        <li
                           key={item.slug}
                           className={`nav-item ${isActive ? "active-side-nav" : ""}`}
                        >
                           <div>{item.icon}</div>
                           <span>{item.title}</span>
                        </li>
                     );
                  }
                  return (
                     <li key={item.slug}>
                        <Link
                           href={item.slug}
                           className={`nav-item ${isActive ? "active-side-nav" : ""}`}
                        >
                           <div>{item.icon}</div>
                           <span>{item.title}</span>
                        </Link>
                     </li>
                  );
               })}
            </ul>
         </div>
         {/* Second Part */}
         <div className="bg-background flex-grow">
            <div className="flex items-center gap-2 pl-3 p-4">
               <IconBookmark />
               <h3 className="font-semibold text-lg">Saved Items</h3>
            </div>
            <FilteredList />
         </div>
      </div>
   );
};

export default Sidebar;
