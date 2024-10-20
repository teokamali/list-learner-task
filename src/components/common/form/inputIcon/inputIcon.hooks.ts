import { useEnhancedProps } from "@/hooks/useBaseComponent/useBaseComponent.hook";
import classNames from "classnames";
import { InputIconHook } from "./inputIcon.types";

export const useInputIconHook = (baseClass: string, inputProps: InputIconHook) => {
   const { className, ...restAttrs } = inputProps;

   const classes = classNames({
      [baseClass]: baseClass,
      [`${className}`]: className,
   });
   const mergedAttrs = useEnhancedProps({
      ...restAttrs,
      className: classes,
   });

   return mergedAttrs;
};
