import { ElementProps } from "@/types/elements.types";

export type TextFormVariants = "default" | "valid" | "invalid";

export interface TextFormProps extends ElementProps {
   variant?: TextFormVariants;
}

export interface TextFormHook extends TextFormProps {}
