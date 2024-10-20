import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { PropsWithChildren, ReactElement, ReactNode } from "react";

export type BaseProps<T = {}> = React.FC<PropsWithChildren<T>>;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
   layout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
   Component: NextPageWithLayout;
};

export type Nullable<T> = T | null;
