import { useEnhancedProps } from "@/hooks/useBaseComponent/useBaseComponent.hook";
import classNames from "classnames";
import { TextFormHook, TextFormVariants } from "./textForm.types";

export const useTextFormHook = (baseClass: string, labelProps: TextFormHook) => {
   const { className, variant, ...restAttrs } = labelProps;

   const getVariant = (variant?: TextFormVariants): TextFormVariants => {
      if (!variant) {
         return "default";
      }

      return `${variant}`;
   };

   const classes = classNames({
      [baseClass]: baseClass,
      "text-main/70": getVariant(variant) === "default",
      "text-primary/70": getVariant(variant) === "valid",
      "text-danger/70": getVariant(variant) === "invalid",
      [`${className}`]: className,
   });

   const mergedAttrs = useEnhancedProps({
      ...restAttrs,
      className: classes,
   });

   return mergedAttrs;
};
