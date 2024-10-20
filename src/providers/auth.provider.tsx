import useAuth from "@/hooks/useAuth/useAuth.hook";
import { BaseProps } from "@/types/global.types";
import { useRouter } from "next/router";
import { useEffect } from "react";

const AuthProvider: BaseProps = ({ children }) => {
   const { isAuthenticated, redirectToLogin } = useAuth();
   const { pathname } = useRouter();

   useEffect(() => {
      if (!isAuthenticated) {
         redirectToLogin({ callback_url: pathname });
      }

      return () => {};
   }, [isAuthenticated]);

   return <>{children}</>;
};

export default AuthProvider;
