import { InputHTMLAttributes } from "react";
import { Omit } from "utility-types";

// Custom types
export type TextInputTypes = "text" | "number" | "email" | "password" | "tel" | "search" | "url";

export type TextInputKinds = "title";

// Input Text Component Props
export interface TextInputProps
   extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      // Exclude these specific attributes
      | "size"
      | "accept"
      | "image"
      | "alt"
      | "capture"
      | "checked"
      | "formAction"
      | "formEnctype"
      | "formMethod"
      | "formNoValidate"
      | "formTarget"
      | "height"
      | "multiple"
      | "src"
      | "width"
      | "type"
   > {
   type?: TextInputTypes;
   valid?: boolean;
   invalid?: boolean;
}

// Input Text Hook
export interface TextInputHook extends TextInputProps {}
