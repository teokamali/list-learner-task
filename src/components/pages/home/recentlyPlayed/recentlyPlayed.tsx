import { BaseProps } from "@/types/global.types";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from "../sliderCard/sliderCard";
import { IRecentlyPlayedProps } from "./recentlyPlayed.types";

const RecentPlayed: BaseProps<IRecentlyPlayedProps> = (props) => {
   const { sliders } = props;
   return (
      <div className="mt-4">
         <h2 className="text-xl text-main font-bold mb-3">Recently Played</h2>
         {/* Slider */}
         <div>
            <Swiper
               spaceBetween={20}
               slidesPerView={"auto"}
               loop
               //    breakpoints={{
               //       "@0.00": {
               //          slidesPerView: 3.5,
               //          spaceBetween: 10,
               //       },
               //       "@0.75": {
               //          slidesPerView: 5.5,
               //          spaceBetween: 20,
               //       },
               //       "@1.00": {
               //          slidesPerView: 7.5,
               //          spaceBetween: 20,
               //       },
               //       "@1.50": {
               //          slidesPerView: 9.5,
               //          spaceBetween: 20,
               //       },
               //    }}
               className="p-2"
            >
               {sliders.map((slide) => {
                  return (
                     <SwiperSlide
                        key={slide.title}
                        className="w-fit"
                     >
                        <SliderCard data={slide} />
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
      </div>
   );
};

export default RecentPlayed;
