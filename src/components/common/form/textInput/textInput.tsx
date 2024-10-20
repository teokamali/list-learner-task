import { useTextInputHook } from "./textInput.hooks";
import { TextInputProps } from "./textInput.types";

export const Input: React.FC<TextInputProps> = (props) => {
   // Base class for styling
   const baseClass = "form-control";
   const mergedAttrs = useTextInputHook(baseClass, props);

   return <input {...mergedAttrs} />;
};
