import { BaseProps } from "@/types/global.types";
import Image from "next/image";
import { useAvatarHook } from "./avatar.hook";
import { AvatarProps } from "./avatar.types";

export const Avatar: BaseProps<AvatarProps> = (props) => {
   const { children } = props;

   // Base class for styling
   const baseClass = "avatar";
   const mergedAttrs = useAvatarHook(baseClass, props);
   return (
      <Image
         alt={props.alt}
         src={props.src}
         {...mergedAttrs}
      >
         {children}
      </Image>
   );
};
