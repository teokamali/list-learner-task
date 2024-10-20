import { BaseProps } from "@/types/global.types";
import { useInputIconHook } from "./inputIcon.hooks";
import { InputIconProps } from "./inputIcon.types";

export const InputIcon: BaseProps<InputIconProps> = (props) => {
   // Base class for styling
   const baseClass = "form-control-icon";
   const mergedAttrs = useInputIconHook(baseClass, props);

   return <div {...mergedAttrs}>{props.children}</div>;
};
