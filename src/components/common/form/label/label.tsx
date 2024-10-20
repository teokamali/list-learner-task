import { BaseProps } from "@/types/global.types";
import { useLabelHook } from "./label.hook";
import { LabelProps } from "./label.types";

export const Label: BaseProps<LabelProps> = (props) => {
   const { children } = props;
   // Base class for styling
   const baseClass = "form-label";
   const mergedAttrs = useLabelHook(baseClass, props);

   return <label {...mergedAttrs}>{children}</label>;
};
