import { BaseProps } from "@/types/global.types";
import { useTextFormHook } from "./textForm.hook";
import { TextFormProps } from "./textForm.types";

export const TextForm: BaseProps<TextFormProps> = (props) => {
   const { children } = props;
   // Base class for styling
   const baseClass = "form-text";
   const mergedAttrs = useTextFormHook(baseClass, props);

   return <span {...mergedAttrs}>{children}</span>;
};
