import { triggerModal } from "@/store/slices/modal/modal.slice";
import { useAppDispatch } from "@/store/store";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { IHeroCard } from "./heroCard.types";

const HeroCard = (props: IHeroCard) => {
   const { cardContent, color } = props;
   const { description, episode, image, name } = cardContent;
   const dispatch = useAppDispatch();

   return (
      <button
         onClick={() => {
            dispatch(triggerModal({ modal: "playbackDrawer", trigger: true }));
         }}
         className={"p-3 rounded-md hover:opacity-60 cursor-pointer transition-all duration-200"}
         style={{
            background: `linear-gradient(90deg, ${color} 0%, rgba(255,255,255,0) 100%)`,
         }}
      >
         <div className="flex items-center justify-between gap-3">
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
      </button>
   );
};

export default HeroCard;
