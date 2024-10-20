import Container from "@/components/common/container/container";
import type { BaseProps } from "@/types/global.types";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";

const MainLayout: BaseProps = ({ children }) => {
   return (
      <div className="bg-background flex h-screen">
         {/* Sidebar */}
         <aside className="text-white bg-black w-[23%]">
            <Sidebar />
         </aside>

         <div className="relative flex flex-col h-[calc(100vh)] overflow-auto w-full">
            <Container kind="boxed">
               {/* Header */}
               <header className="text-white rounded-lg shadow-md sticky top-0 left-0">
                  <Header />
               </header>
               {/* Main Content */}
               <main className="rounded-lg shadow-md">{children}</main>
            </Container>
         </div>

         {/* Playback Detail */}
         <div className="p-4 text-white rounded-lg shadow-md hidden">PlaybackDetail</div>
      </div>
   );
};

export default MainLayout;
