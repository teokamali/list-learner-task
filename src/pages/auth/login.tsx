import AuthLayout from "@/components/layouts/auth/auth.layout";
import LoginForm from "@/components/pages/auth/loginForm/loginForm";

import { ReactElement } from "react";

const Login = () => {
   return (
      <div className="w-full ">
         <h1 className="mb-6 font-roboto font-bold text-2xl text-main">Login Page</h1>
         <LoginForm />
      </div>
   );
};

Login.layout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Login;
