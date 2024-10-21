import { Avatar } from "@/components/common/avatar/avatar";
import FilteredList from "@/components/layouts/main/filteredList/filteredList";
import { useAppSelector } from "@/store/store";
import { IconBookmark } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { sidebarRoutes } from "./sidebar.routes";

const Sidebar = () => {
   const { user } = useAppSelector((state) => state.auth);
   const { pathname } = useRouter();
   return (
      <div className="pr-[6px] flex flex-col gap-[6px] h-full w-full">
         {/* First Part */}
         <div className="bg-background p-2">
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
            <div className="mb-2 mx-[6px] border-b border-b-[#cecccc3b]" />
            <ul className="flex flex-col">
               {sidebarRoutes.map((item) => {
                  const isActive = item.slug === pathname;
                  if (item.disabled) {
                     return (
                        <li
                           key={item.slug}
                           className={`nav-item ${isActive ? "active-side-nav" : ""}`}
                        >
                           <div>{item.icon}</div>
                           <span className="text-base">{item.title}</span>
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
                           <span className="text-base">{item.title}</span>
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
