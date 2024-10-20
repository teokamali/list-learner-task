import { useEnhancedProps } from "@/hooks/useBaseComponent/useBaseComponent.hook";
import classNames from "classnames";
import { FromGroupHook } from "./fromGroup.types";

export const useFormGroupHook = (baseClass: string, formGroupProps: FromGroupHook) => {
   const { className, ...restAttrs } = formGroupProps;

   const classes = classNames({
      [baseClass]: baseClass,
      "w-full": true,
      [`${className}`]: className,
   });

   const mergedAttrs = useEnhancedProps({
      ...restAttrs,
      className: classes,
   });

   return mergedAttrs;
};
