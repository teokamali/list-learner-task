import MainLayout from "@/components/layouts/main/main.layout";
import Hero from "@/components/pages/home/hero/hero";
import { ReactElement } from "react";

export default function Home() {
   return (
      <>
         <Hero />
      </>
   );
}
Home.layout = (page: ReactElement) => {
   return <MainLayout>{page}</MainLayout>;
};
