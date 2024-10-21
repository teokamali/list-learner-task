import SingleBookLayout from "@/components/layouts/singleBook/singleBook.layout";
import { ReactElement } from "react";

export default function SingleBook(
   //data
) {
   return <h1 className="text-main">SingleBook</h1>;
}
SingleBook.layout = (page: ReactElement) => <SingleBookLayout>{page}</SingleBookLayout>;
//* Fetch data from external API on server with every client request and render HTML ON Server (SSR)
export async function getServerSideProps() {
   // const res = await fetch(`https://.../data`)
   // const data = await res.json()

   // Pass data to the page via props
   return {
      props: {
         // data
      },
   };
}
