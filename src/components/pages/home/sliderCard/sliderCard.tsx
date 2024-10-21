import { triggerModal } from "@/store/slices/modal/modal.slice";
import { useAppDispatch } from "@/store/store";
import { BaseProps } from "@/types/global.types";
import Image from "next/image";
import { ISliderCardProps } from "./sliderCard.types";

const SliderCard: BaseProps<ISliderCardProps> = (props) => {
   const { data } = props;
   const { image, isNew, owner, title } = data;
   const dispatch = useAppDispatch();

   return (
      <div
         className="flex flex-col gap-2 min-h-28 max-w-24 hover:opacity-35 transition-opacity duration-200 cursor-pointer relative"
         onClick={() => {
            dispatch(triggerModal({ modal: "playbackDrawer", trigger: true }));
         }}
      >
         <Image
            alt={title}
            src={image}
            width={100}
            height={100}
            className="aspect-square rounded-md"
         />
         <h5 className="text-main text-[13px] font-semibold">{title}</h5>
         <span className="text-main text-xs font-medium">{owner}</span>
         {isNew ? <div className="w-3 h-3 rounded-full bg-primary absolute -top-1 -right-1" /> : <></>}
      </div>
   );
};

export default SliderCard;
