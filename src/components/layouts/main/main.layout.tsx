import type { BaseProps } from "@/types/global.types";

const MainLayout: BaseProps = ({ children }) => {
   return (
      <div className="bg-background">
         <header>Header</header>

         <aside>Sidebar</aside>
         <main>{children}</main>
      </div>
   );
};

export default MainLayout;
