import { useCheckboxHook } from "./checkbox.hook";
import { CheckboxProps } from "./checkbox.types";

export const Checkbox: React.FC<CheckboxProps> = (props) => {
   // Base class for styling
   const baseClass = "form-checkbox";
   const mergedAttrs = useCheckboxHook(baseClass, props);

   return (
      <input
         {...mergedAttrs}
         type="checkbox"
      />
   );
};
