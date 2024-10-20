import { useEnhancedProps } from "@/hooks/useBaseComponent/useBaseComponent.hook";
import { UiSizes, UiVariants } from "@/types/elements.types";
import classNames from "classnames";
import { ButtonHook, UIButton } from "./button.types";

export const useButtonHook = (baseClass: string, btnProps: ButtonHook) => {
   const { variant, size, className, pilled, disabled, onClick, full, kind, bordered, ...restAttrs } = btnProps;

   const getVariant = ({ kind, variant }: { kind: UIButton["kind"]; variant?: UiVariants }) => {
      let btnClass = "";

      switch (kind) {
         case "primary": {
            const defaultVariant = variant ?? "primary";
            btnClass += `${defaultVariant}`;
            break;
         }
         case "outlined": {
            const defaultVariant = variant ?? "primary";
            btnClass += `${kind}-${defaultVariant}`;
            break;
         }
      }

      return btnClass;
   };

   const getSize = (size?: UiSizes) => {
      if (!size) {
         return null;
      }

      return `${size}`;
   };

   const classes = classNames({
      [`${baseClass}-${getVariant({ kind, variant })}`]: getVariant({ kind, variant }),
      [`${baseClass}-${getSize(size)}`]: getSize(size),
      "btn-bordered": bordered,
      "w-full": full,
      "rounded-[50em]": pilled,
      [`${className}`]: className,
   });

   const onClickWrapper = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return true;
      onClick?.(e);
   };

   const mergedAttrs = useEnhancedProps({
      ...restAttrs,
      disabled,
      onClick: onClickWrapper,
      className: classes,
   });

   return mergedAttrs;
};
