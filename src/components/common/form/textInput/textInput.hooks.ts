import { useEnhancedProps } from "@/hooks/useBaseComponent/useBaseComponent.hook";
import classNames from "classnames";
import { TextInputHook, TextInputTypes } from "./textInput.types";

export const useTextInputHook = (baseClass: string, inputProps: TextInputHook) => {
   const { className, autoFocus, disabled, invalid, valid, value, type, ...restAttrs } = inputProps;

   const classes = classNames({
      [baseClass]: baseClass,
      "border-main": autoFocus,
      "border-danger bg-danger/[0.04]": invalid,
      "border-primary bg-primary/[0.04]": valid,
      [`${className}`]: className,
   });

   const getTextInputType = (inputType?: TextInputTypes): TextInputTypes => {
      if (!inputType) {
         return "text";
      }

      return inputType;
   };

   const mergedAttrs = useEnhancedProps({
      ...{ ...restAttrs, autoFocus, disabled },
      type: getTextInputType(type),
      value,
      className: classes,
   });

   return mergedAttrs;
};
