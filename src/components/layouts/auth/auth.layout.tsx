import Container from "@/components/common/container/container";
import { BaseProps } from "@/types/global.types";

const AuthLayout: BaseProps = ({ children }) => {
   return (
      <div className="bg-background">
         <Container
            kind="boxed"
            className="max-w-md flex items-center justify-center h-screen"
         >
            {children}
         </Container>
      </div>
   );
};

export default AuthLayout;
