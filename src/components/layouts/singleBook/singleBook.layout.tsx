import Container from "@/components/common/container/container";
import Sidebar from "@/components/common/sidebar/sidebar";
import { BaseProps } from "@/types/global.types";
import BookHeader from "./header/header";

const SingleBookLayout: BaseProps = (props) => {
   const { children } = props;
   return (
      <div className="bg-background flex h-screen">
         {/* Sidebar */}
         <aside className="text-white bg-black w-[23%]">
            <Sidebar />
         </aside>

         <div className={"relative flex flex-col h-screen overflow-auto w-full pr-4"}>
            <Container kind="boxed">
               {/* Header */}
               <header className="text-white rounded-lg shadow-md sticky top-0 left-0 z-20">
                  <BookHeader />
               </header>
               {/* Main Content */}
               <main className="rounded-lg ">{children}</main>
            </Container>
         </div>
      </div>
   );
};

export default SingleBookLayout;
