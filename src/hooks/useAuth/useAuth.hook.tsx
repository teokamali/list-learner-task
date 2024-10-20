import { useRouter } from "next/navigation";
import { usePermalink } from "../usePermalinks/usePermalink.hook";
import { IAuthHookProps, IRedirectToLoginProps } from "./useAuth.types";

const useAuth = (props: IAuthHookProps) => {
   const router = useRouter();
   const { internalLinks } = usePermalink();

   const redirectToLogin = (args: IRedirectToLoginProps) => {
      if (args.callback_url) {
         router.push(internalLinks.auth.login.get(args.callback_url));
      }
      router.push(internalLinks.auth.login.slug);
   };
   return { redirectToLogin };
};

export default useAuth;
