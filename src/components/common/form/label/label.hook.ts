import { useEnhancedProps } from "@/hooks/useBaseComponent/useBaseComponent.hook";
import classNames from "classnames";
import { LabelHook } from "./label.types";

export const useLabelHook = (baseClass: string, labelProps: LabelHook) => {
   const { className, ...restAttrs } = labelProps;

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
