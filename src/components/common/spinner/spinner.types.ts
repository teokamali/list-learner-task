import { ElementProps, UiVariants } from "@/types/elements.types";
import { HTMLAttributes } from "react";

export type SpinnerKind = "border" | "grow";
export type SpinnerSize = "sm";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
   kind?: SpinnerKind;
   variant?: UiVariants;
   size?: SpinnerSize;
}

export type SpinnerHook = ElementProps & SpinnerProps;
