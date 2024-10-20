import { useEnhancedProps } from "@/hooks/useBaseComponent/useBaseComponent.hook";
import { UiVariants } from "@/types/elements.types";
import classNames from "classnames";
import { SpinnerHook, SpinnerKind } from "./spinner.types";

export const useSpinner = (baseClass: string, props: SpinnerHook) => {
   const { kind, variant, size, className, ...restAttrs } = props;

   const getKind = (kind?: SpinnerKind): SpinnerKind => {
      if (!kind || kind === "border") {
         return "border";
      }

      return kind;
   };

   const getVariant = (variant?: UiVariants): UiVariants | null => {
      if (!variant) {
         return null;
      }

      return variant;
   };

   const classes = classNames({
      [`${baseClass}-${getKind(kind)}`]: !getVariant(variant),
      [`${baseClass}-${getKind(kind)} text-${getVariant(variant)}`]: getVariant(variant),
      [`${baseClass}-${getKind(kind)}-${size}`]: size,
      [`${className}`]: className,
   });

   const mergedAttrs = useEnhancedProps({
      ...restAttrs,
      className: classes,
   });

   return mergedAttrs;
};
