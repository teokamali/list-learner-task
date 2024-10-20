import { LabelHTMLAttributes } from "react";

// Label Component Props
export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
   htmlFor?: string;
}

export interface LabelHook extends LabelProps {}
