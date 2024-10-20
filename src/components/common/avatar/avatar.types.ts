import type { ElementProps } from "@/types/elements.types";

// Components
export type AvatarSizes = "sm" | "md" | "lg" | "xl";
export interface AvatarProps extends ElementProps {
   size?: AvatarSizes;
   alt: string;
   src: string;
}

export interface AvatarHook extends AvatarProps {}
