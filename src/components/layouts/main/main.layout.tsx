import type { BaseProps } from "@/types/global.types";
import Sidebar from "./sidebar/sidebar";

const MainLayout: BaseProps = ({ children }) => {
   return (
      <div className="bg-background flex h-screen">
         {/* Sidebar */}
         <aside className="text-white bg-black w-[23%]">
            <Sidebar />
         </aside>

         <div className="relative flex flex-col h-[calc(100vh)] overflow-auto w-full">
            {/* Header */}
            <header className="text-white rounded-lg shadow-md h-[120px] sticky top-0 left-0 right-0">Header</header>
            {/* Main Content */}
            <main className=" p-4 rounded-lg shadow-md">{children}</main>
         </div>

         {/* Playback Detail */}
         <div className="p-4 text-white rounded-lg shadow-md hidden">PlaybackDetail</div>
      </div>
   );
};

export default MainLayout;
