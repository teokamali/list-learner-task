import { useEnhancedProps } from "@/hooks/useBaseComponent/useBaseComponent.hook";
import classNames from "classnames";
import { AvatarHook, AvatarSizes } from "./avatar.types";

export const useAvatarHook = (baseClass: string, btnProps: AvatarHook) => {
   const { size, className, ...restAttrs } = btnProps;

   const getSize = (size?: AvatarSizes) => {
      if (!size) {
         return "md";
      }
      return size;
   };

   const getDimensions = (size?: AvatarSizes) => {
      switch (size) {
         case "sm": {
            return { width: 18, height: 18 };
         }
         case "lg": {
            return { width: 30, height: 30 };
         }
         case "xl": {
            return { width: 64, height: 64 };
         }

         case "md": {
            return { width: 24, height: 24 };
         }
         default: {
            return { width: 24, height: 24 };
         }
      }
   };

   const classes = classNames({
      [`${baseClass}`]: true,
      [`${baseClass}-${getSize(size)}`]: true,
      [`${className}`]: className,
   });

   const mergedAttrs = useEnhancedProps({
      ...restAttrs,
      className: classes,
   });

   return { ...mergedAttrs, ...getDimensions(size) };
};
