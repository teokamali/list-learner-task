import MainLayout from "@/components/layouts/main/main.layout";
import FontsProvider from "@/providers/fonts.provider";
import "@/styles/globals.css";
import { persistor, store } from "@/store/store";
import "@/styles/globals.css";
import AuthProvider from "@/providers/auth.provider";
import ModalsProvider from "@/providers/modals.provider";
import type { AppPropsWithLayout } from "@/types/global.types";
import type { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
   const defaultLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;
   const getLayout = Component.layout ?? defaultLayout;

   return (
      <>
         <Provider store={store}>
            <PersistGate
               loading={<span>loading...</span>}
               persistor={persistor}
            >
               <AuthProvider>
                  <FontsProvider>
                     {getLayout(<Component {...pageProps} />)}

                     <ModalsProvider />
                  </FontsProvider>
               </AuthProvider>
            </PersistGate>
         </Provider>
      </>
   );
}
