import { Button } from "@/components/common/button/button";
import { FormGroup } from "@/components/common/form/formGroup/fromGroup";
import { InputIcon } from "@/components/common/form/inputIcon/inputIcon";
import { Input } from "@/components/common/form/textInput/textInput";
import { sidebarRoutes } from "@/components/common/sidebar/sidebar.routes";
import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/router";

const Header = () => {
   const { pathname } = useRouter();
   const currentRoute = sidebarRoutes.find((item) => item.slug === pathname);
   return (
      <div className="py-4 bg-background">
         <div className="flex w-full items-center justify-between">
            <div>
               <h5 className="text-3xl font-bold">{currentRoute?.title}</h5>
            </div>
            <div className="flex items-center gap-3">
               <Button
                  kind="primary"
                  variant="light"
                  size="sm"
               >
                  ⚡️ 90
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
         <div className="flex w-full items-center justify-between mt-3">
            <div className="flex gap-2 items-center">
               <Button
                  kind="primary"
                  size="sm"
               >
                  All
               </Button>
               <Button
                  kind="primary"
                  size="sm"
                  variant="light"
               >
                  💡 Productivity
               </Button>
               <Button
                  kind="primary"
                  size="sm"
                  variant="light"
               >
                  🎨 Creative
               </Button>
               <Button
                  kind="primary"
                  size="sm"
                  variant="light"
               >
                  🔥 Trend
               </Button>
            </div>
            <FormGroup className="max-w-[320px]">
               <InputIcon>
                  <Input placeholder="What do you want to learn today?" />
                  <IconSearch className="text-gray-400" />
               </InputIcon>
            </FormGroup>
         </div>
      </div>
   );
};

export default Header;
