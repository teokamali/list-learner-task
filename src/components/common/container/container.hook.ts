import { useEnhancedProps } from "@/hooks/useBaseComponent/useBaseComponent.hook";
import classNames from "classnames";
import { ContainerHook, ContainerKinds } from "./container.types";

export const useContainer = (baseClass: string, props: ContainerHook) => {
   const { kind, className, ...restAttrs } = props;

   const getKind = (kind?: ContainerKinds): ContainerKinds => {
      switch (kind) {
         case "boxed": {
            return "boxed";
         }
         case "fluid": {
            return "fluid";
         }
         default: {
            return "boxed";
         }
      }
   };

   const classes = classNames({
      [`${baseClass}-${getKind(kind)}`]: true,
      [`${className}`]: className,
   });

   const mergedAttrs = useEnhancedProps({
      ...restAttrs,
      className: classes,
   });

   return mergedAttrs;
};
