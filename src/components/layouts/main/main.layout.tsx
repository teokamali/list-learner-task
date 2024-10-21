import Container from "@/components/common/container/container";
import Sidebar from "@/components/common/sidebar/sidebar";
import PlaybackDrawer from "@/components/snippets/modals/playbackDrawer/playbackDrawer";
import { useAppSelector } from "@/store/store";
import type { BaseProps } from "@/types/global.types";
import { motion } from "framer-motion";
import Header from "./header/header";

const PlaybackWidth = 320;
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
         <motion.div
            className="h-screen overflow-auto "
            initial={false}
            animate={{ paddingRight: modals.playbackDrawer ? `${PlaybackWidth - 20}px` : "0px" }}
            transition={{ type: "keyframes", duration: 0.5, ease: "backOut" }}
         >
            <Container kind="boxed">
               {/* Main Content */}

               {/* Header */}
               <header className="text-white rounded-lg shadow-md sticky top-0 left-0 z-20">
                  <Header />
               </header>

               <main>{children}</main>
            </Container>
         </motion.div>

         {/* Playback Drawer */}
         <motion.div
            className={`max-w-[${PlaybackWidth}px] fixed top-0 bottom-0 right-0 z-50`}
            initial={false}
            animate={{
               x: modals.playbackDrawer ? 0 : "100%",
               opacity: modals.playbackDrawer ? 1 : 0,
            }}
            transition={{ type: "keyframes", duration: 0.5, ease: "backOut" }}
         >
            <PlaybackDrawer />
         </motion.div>
      </div>
   );
};

export default MainLayout;
