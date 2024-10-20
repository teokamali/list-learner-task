import { useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { usePermalink } from "../usePermalinks/usePermalink.hook";
import { IRedirectToLoginProps } from "./useAuth.types";

const useAuth = () => {
   const router = useRouter();
   const { internalLinks } = usePermalink();
   const { token } = useAppSelector((state) => state.auth);

   const redirectToLogin = (args: IRedirectToLoginProps) => {
      if (args.callback_url) {
         router.push(internalLinks.auth.login.get(args.callback_url));
      }
      router.push(internalLinks.auth.login.slug);
   };

   const isAuthenticated = !!token; // or it can be more complicated

   return { redirectToLogin, isAuthenticated };
};

export default useAuth;
