import { BaseProps } from "@/types/global.types";
import { useFormGroupHook } from "./fromGroup.hook";
import { FromGroupProps } from "./fromGroup.types";

export const FormGroup: BaseProps<FromGroupProps> = (props) => {
   const { children } = props;
   // Base class for styling
   const baseClass = "form-group";
   const mergedAttrs = useFormGroupHook(baseClass, props);

   return <div {...mergedAttrs}>{children}</div>;
};
