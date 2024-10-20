import { useEnhancedProps } from "@/hooks/useBaseComponent/useBaseComponent.hook";
import classNames from "classnames";
import { CheckboxHook } from "./checkbox.types";

export const useCheckboxHook = (baseClass: string, checkoutProps: CheckboxHook) => {
   const { className, disabled, ...restAttrs } = checkoutProps;

   const classes = classNames({
      [baseClass]: baseClass,
      "opacity-70": disabled,
      [`${className}`]: className,
   });

   const mergedAttrs = useEnhancedProps({
      ...{ ...restAttrs, disabled },
      className: classes,
   });

   return mergedAttrs;
};
