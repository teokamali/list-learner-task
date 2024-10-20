import type { BaseProps } from "@/types/global.types";

const MainLayout: BaseProps = ({ children }) => {
   return (
      <div className="bg-background grid grid-rows-1 gap-2 h-screen">
         {/* Sidebar */}
         <aside className="row-span-2 bg-red-500 p-4 text-white">Sidebar</aside>

         {/* Playback Detail */}
         <div className="col-start-3 row-span-2 bg-gray-700 p-4 text-white rounded-lg shadow-md">PlaybackDetail</div>

         <div className="relative flex flex-col col-start-2 row-start-1  h-[calc(100vh)] overflow-auto">
            {/* Header */}
            <header className="bg-blue-600 p-4 text-white rounded-lg shadow-md h-[120px] sticky top-0 left-0 right-0">
               Header
            </header>
            {/* Main Content */}
            <main className="bg-green-300 p-4 rounded-lg shadow-md">{children}</main>
         </div>
      </div>
   );
};

export default MainLayout;
