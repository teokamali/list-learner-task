import { ElementProps, UiSizes, UiVariants } from "@/types/elements.types";
import { ButtonHTMLAttributes } from "react";

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

export type ButtonOutlined = {
   kind: "outlined";
   variant?: UiVariants;
};

export type UIButton = ButtonPrimary | ButtonOutlined;

export type ButtonProps = ButtonBase & UIButton & ButtonHTMLAttributes<HTMLButtonElement>;
export type ButtonHook = ElementProps & ButtonProps;
