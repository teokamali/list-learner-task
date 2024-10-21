import useAuth from "@/hooks/useAuth/useAuth.hook";
import { BaseProps } from "@/types/global.types";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";

const AuthProvider: BaseProps = ({ children }) => {
   const { isAuthenticated, redirectToLogin } = useAuth();
   const { pathname } = useRouter();

   useLayoutEffect(() => {
      if (!isAuthenticated) {
         redirectToLogin({ callback_url: pathname });
      }

      return () => {};
   }, [isAuthenticated]);

   return <>{children}</>;
};

export default AuthProvider;
