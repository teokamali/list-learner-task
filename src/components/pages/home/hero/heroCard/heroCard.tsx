import { triggerModal } from "@/store/slices/modal/modal.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { IHeroCard } from "./heroCard.types";

const HeroCard = (props: IHeroCard) => {
   const { cardContent, color } = props;
   const { description, episode, image, name } = cardContent;
   const dispatch = useAppDispatch();
   const { playbackDrawer } = useAppSelector((state) => state.modal.modals);

   return (
      <div
         onClick={() => {
            dispatch(triggerModal({ modal: "playbackDrawer", trigger: !playbackDrawer }));
         }}
         className={
            "px-3 py-4 rounded-md cursor-pointer relative z-10 group overflow-hidden flex items-center justify-center"
         }
      >
         {/* Background Gradient */}
         <div
            className="absolute inset-0 group-hover:opacity-60 transition-opacity duration-200"
            style={{
               background: `linear-gradient(90deg, ${color} 0%, rgba(255,255,255,0) 100%)`,
            }}
         />
         {/* Circular Boxs */}

         <div className="w-44 h-44 bg-white/10 rounded-full -left-[70px] absolute top-1/2 -translate-y-1/2  group-hover:scale-x-[115%] transition-transform duration-300" />
         <div className="w-44 h-44 bg-white/10 rounded-full -left-[85px] absolute top-1/2 -translate-y-1/2  group-hover:scale-x-[115%] transition-transform duration-300" />
         <div className="w-44 h-44 bg-white/10 rounded-full -left-[100px] absolute top-1/2 -translate-y-1/2  group-hover:scale-x-[115%] transition-transform duration-300" />

         <div className="flex items-center justify-between gap-3 relative z-10">
            <Image
               alt={name}
               src={image}
               width={75}
               height={75}
               className="w-[75px] h-[75px] rounded-md"
            />
            <div className="flex-grow text-start">
               <h2 className="font-semibold text-white text-lg">{name}</h2>
               <span className="text-xs text-main font-semibold">Episode {episode}</span>
               <p className="text-sm font-medium text-main ">{description}</p>
            </div>
            <div>
               <IconArrowRight className="text-main" />
            </div>
         </div>
      </div>
   );
};

export default HeroCard;
