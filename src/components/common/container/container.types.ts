import { ElementProps } from "@/types/elements.types";

export type ContainerKinds = "boxed" | "fluid";

export interface ContainerProps extends ElementProps {
   kind?: ContainerKinds;
}

export interface ContainerHook extends ContainerProps {}
