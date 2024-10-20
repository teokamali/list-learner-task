import { BaseProps } from "@/types/global.types";
import { useContainer } from "./container.hook";
import { ContainerProps } from "./container.types";

const Container: BaseProps<ContainerProps> = (props) => {
   const { children } = props;

   const baseClass = "container";
   const mergedAttrs = useContainer(baseClass, props);

   return <div {...mergedAttrs}>{children}</div>;
};

export default Container;
