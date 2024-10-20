import { BaseProps } from "@/types/global.types";
import { useSpinner } from "./spinner.hook";
import { SpinnerProps } from "./spinner.types";

export const Spinner: BaseProps<SpinnerProps> = (props) => {
   const { children } = props;

   const baseClass = "spinner";
   const mergedAttrs = useSpinner(baseClass, props);

   return (
      <div {...mergedAttrs}>
         <span className="visually-hidden">{children ? children : "please wait..."}</span>
      </div>
   );
};
