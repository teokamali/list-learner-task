import Container from "@/components/common/container/container";
import Sidebar from "@/components/common/sidebar/sidebar";
import PlaybackDrawer from "@/components/snippets/modals/playbackDrawer/playbackDrawer";
import { useAppSelector } from "@/store/store";
import type { BaseProps } from "@/types/global.types";
import { motion } from "framer-motion";
import Header from "./header/header";

const PlaybackWidth = 340;
const SIDEBAR_WIDTH = 320;

const MainLayout: BaseProps = ({ children }) => {
   const { modals } = useAppSelector((state) => state.modal);

   return (
      <div className="bg-background flex h-screen">
         {/* Sidebar */}
         <aside
            className={"text-white bg-[#181818] flex-shrink-0"}
            style={{
               width: `${SIDEBAR_WIDTH}px`,
            }}
         >
            <Sidebar />
         </aside>

         {/* Main Content Area */}
         <div className="relative flex flex-col h-screen overflow-auto">
            <Container kind="boxed">
               {/* Main Content */}
               <div className="flex ">
                  <div className="flex-grow ">
                     {/* Header */}
                     <header className="text-white rounded-lg shadow-md sticky top-0 left-0 z-20">
                        <Header />
                     </header>

                     <main>{children}</main>
                  </div>
                  <motion.div
                     initial={false}
                     className="flex-shrink-0"
                     animate={{ width: modals.playbackDrawer ? `${PlaybackWidth}px` : "10px" }}
                     transition={{ type: "tween", duration: 0.2, ease: "linear" }}
                  />
               </div>
            </Container>
         </div>

         {/* Playback Drawer */}
         <motion.div
            className={`w-[${PlaybackWidth}px] fixed  top-0 bottom-0 right-0 z-50`}
            initial={false}
            animate={{
               x: modals.playbackDrawer ? 0 : "100%",
               opacity: modals.playbackDrawer ? 1 : 0,
            }}
            transition={{ type: "tween", duration: 0.2, ease: "linear" }}
         >
            <PlaybackDrawer />
         </motion.div>
      </div>
   );
};

export default MainLayout;
