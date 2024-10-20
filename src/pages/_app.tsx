import MainLayout from "@/components/layouts/main/main.layout";
import FontsProvider from "@/providers/fonts.provider";
import "@/styles/globals.css";
import type { AppPropsWithLayout } from "@/types/global.types";
import type { ReactElement, ReactNode } from "react";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
   const defaultLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;
   const getLayout = Component.layout ?? defaultLayout;
   return (
      <>
         <FontsProvider>{getLayout(<Component {...pageProps} />)}</FontsProvider>
      </>
   );
}
