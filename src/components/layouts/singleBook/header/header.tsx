import { Button } from "@/components/common/button/button";
import { IconArrowLeft, IconBookmark, IconMessage } from "@tabler/icons-react";
import { useRouter } from "next/router";

const BookHeader = () => {
   const { back } = useRouter();
   return (
      <div className="py-4 bg-background">
         <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-4">
               <Button
                  kind="primary"
                  variant="light"
                  size="sm"
                  onClick={back}
               >
                  <IconArrowLeft />
               </Button>
               <h5 className="text-3xl font-bold">Book Name</h5>
            </div>
            <div className="flex items-center gap-3">
               <Button
                  kind="primary"
                  variant="light"
                  size="sm"
               >
                  <IconBookmark />
               </Button>
               <Button
                  kind="primary"
                  variant="light"
                  size="sm"
               >
                  <IconMessage />
               </Button>
               <Button
                  kind="primary"
                  variant="light"
                  size="sm"
               >
                  ❤️ 120
               </Button>
            </div>
         </div>
      </div>
   );
};

export default BookHeader;
