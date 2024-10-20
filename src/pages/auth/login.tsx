import { Button } from "@/components/common/button/button";
import { setToken, setUser } from "@/store/slices/auth/auth.slice";
import { useAppDispatch } from "@/store/store";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const Login = () => {
   const dispatch = useAppDispatch();
   const router = useRouter();
   const searchparams = useSearchParams();

   const loginHandler = () => {
      dispatch(setUser({ email: "Test@gmail.com", avatar: "", id: 1, name: "Test Name" }));
      dispatch(
         setToken(
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
         ),
      );
      const callbackURL = searchparams.get("callback_url");
      if (callbackURL) {
         router.push(callbackURL);
      }
      router.push("/");
   };
   return (
      <div>
         <h1>Login Page</h1>
         <Button
            kind="primary"
            onClick={loginHandler}
         >
            Login
         </Button>
      </div>
   );
};

export default Login;
