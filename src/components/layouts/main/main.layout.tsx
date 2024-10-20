import Container from "@/components/common/container/container";
import PlaybackDrawer from "@/components/snippets/modals/playbackDrawer/playbackDrawer";
import { useAppSelector } from "@/store/store";
import type { BaseProps } from "@/types/global.types";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";

const PlaybackWidth = 450;

const MainLayout: BaseProps = ({ children }) => {
   const { modals } = useAppSelector((state) => state.modal);
   return (
      <div className="bg-background flex h-screen">
         {/* Sidebar */}
         <aside className="text-white bg-black w-[23%]">
            <Sidebar />
         </aside>

         <div
            className={`relative flex flex-col h-screen overflow-auto w-full pr-4 ${modals.playbackDrawer ? `pr-[${PlaybackWidth.toString()}px]` : ""}`}
            style={{
               paddingRight: modals.playbackDrawer ? `${PlaybackWidth}px` : "0px",
            }}
         >
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
         <div
            className={`shadow-md w-[${PlaybackWidth}px]  fixed top-0 bottom-0 right-0 transition-transform duration-300`}
            style={{
               transform: `translateX(${modals.playbackDrawer ? "0" : "100"}%)`,
            }}
         >
            <PlaybackDrawer />
         </div>
      </div>
   );
};

export default MainLayout;
