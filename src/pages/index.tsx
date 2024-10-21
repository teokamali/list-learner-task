import MainLayout from "@/components/layouts/main/main.layout";
import ForYouSlider from "@/components/pages/home/forYouSlider/forYouSlider";
import Hero from "@/components/pages/home/hero/hero";
import RecentPlayed from "@/components/pages/home/recentlyPlayed/recentlyPlayed";
import { ISliderCardData } from "@/components/pages/home/sliderCard/sliderCard.types";
import { ReactElement } from "react";
interface IHomePageProps {
   sliders: ISliderCardData[];
   recently: ISliderCardData[];
}
export default function Home(props: IHomePageProps) {
   const { sliders, recently } = props;
   return (
      <>
         <Hero />
         <ForYouSlider sliders={sliders} />
         <RecentPlayed sliders={recently} />
      </>
   );
}
Home.layout = (page: ReactElement) => {
   return <MainLayout>{page}</MainLayout>;
};

//*  This Page's HTTML Will generate on build time and we can use function below to get any data we need on build time (SSG) or revalidate it every 1H ("ISR")
export async function getStaticProps() {
   // const res = await fetch("https://.../");
   // const posts = await res.json();
   const sliderData: ISliderCardData[] = [
      {
         image: "https://picsum.photos/150?random=1",
         isNew: true,
         owner: "John Doe",
         title: "The Joe Rogan Experience",
      },
      {
         image: "https://picsum.photos/150?random=2",
         isNew: false,
         owner: "Jane Smith",
         title: "Radiolab",
      },
      {
         image: "https://picsum.photos/150?random=3",
         isNew: true,
         owner: "Alex Johnson",
         title: "Stuff You Should Know",
      },
      {
         image: "https://picsum.photos/150?random=4",
         isNew: false,
         owner: "Emily Davis",
         title: "How I Built This",
      },
      {
         image: "https://picsum.photos/150?random=5",
         isNew: true,
         owner: "Chris Lee",
         title: "Freakonomics Radio",
      },
      {
         image: "https://picsum.photos/150?random=6",
         isNew: false,
         owner: "Rachel Adams",
         title: "TED Talks Daily",
      },
      {
         image: "https://picsum.photos/150?random=7",
         isNew: true,
         owner: "Michael Brown",
         title: "The Daily",
      },
      {
         image: "https://picsum.photos/150?random=8",
         isNew: false,
         owner: "Jessica Clark",
         title: "Planet Money",
      },
      {
         image: "https://picsum.photos/150?random=9",
         isNew: true,
         owner: "David Wright",
         title: "99% Invisible",
      },
      {
         image: "https://picsum.photos/150?random=10",
         isNew: false,
         owner: "Sophia Miller",
         title: "The Moth",
      },
      {
         image: "https://picsum.photos/150?random=11",
         isNew: true,
         owner: "Brian Evans",
         title: "The Tim Ferriss Show",
      },
   ];

   return {
      props: {
         sliders: sliderData,
         recently: sliderData.slice(0, 6),
      },
   };
}
