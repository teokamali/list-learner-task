import { InputHTMLAttributes } from "react";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "disabled" | "onChange"> {
   disabled?: boolean;
   value?: boolean;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckboxHook extends CheckboxProps {}
