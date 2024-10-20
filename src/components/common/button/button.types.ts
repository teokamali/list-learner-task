import { ElementProps, UiSizes, UiVariants } from "@/types/elements.types";
import { ButtonHTMLAttributes } from "react";

export type ButtonGradientVariants = "primary" | "yellow-dark";
export type ButtonPatternVariants = "glitch";

// Components
export type ButtonBase = {
   size?: UiSizes;
   pilled?: boolean;
   full?: boolean;
   bordered?: boolean;
};

export type ButtonPrimary = {
   kind: "primary";
   variant?: UiVariants;
};

export type ButtonGradient = {
   kind: "gradient";
   variant?: ButtonGradientVariants;
};

export type ButtonGlitch = {
   kind: "pattern";
   variant?: ButtonPatternVariants;
};

export type UIButton = ButtonPrimary | ButtonGradient | ButtonGlitch;

export type ButtonProps = ButtonBase & UIButton & ButtonHTMLAttributes<HTMLButtonElement>;
export type ButtonHook = ElementProps & ButtonProps;
