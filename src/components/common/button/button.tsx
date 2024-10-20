import { BaseProps } from "@/types/global.types";
import { useButtonHook } from "./button.hook";
import { ButtonProps } from "./button.types";

export const Button: BaseProps<ButtonProps> = (props) => {
   const { children } = props;
   // Base class for styling
   const baseClass = "btn";
   const mergedAttrs = useButtonHook(baseClass, props);
   return <button {...mergedAttrs}>{children}</button>;
};
