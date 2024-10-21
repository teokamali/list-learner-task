import { Button } from "@/components/common/button/button";
import { triggerModal } from "@/store/slices/modal/modal.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { formatTime } from "@/utils/fotmat.utils";
import { IconPlayerPlay, IconX } from "@tabler/icons-react";
import Image from "next/image";

const CompactPlayer = () => {
   const samplePodcastData: PodcastPlayerProps = {
      title: "Rejecting Social Norms For Justice",
      chapter: "Chapter 7",
      chapterName: "The Daily Stoice",
      imageSrc: "https://picsum.photos/150?random=1",
      progress: 4 * 60 + 24, // 4 minutes and 24 seconds
      duration: 17 * 60 + 39, // 17 minutes and 39 seconds
      currentTime: 4 * 60 + 24, // Same as progress to start with
   };
   const dispatch = useAppDispatch();
   const { chapter, chapterName, currentTime, duration, imageSrc, progress, title } = samplePodcastData;
   const { compactPlayer } = useAppSelector((state) => state.modal.modals);
   return (
      <div
         className="fixed bottom-7 right-12 p-2 translate-y-[200%] bg-white/20 rounded-md z-30 transition-transform duration-300"
         style={{
            transform: compactPlayer ? "translateY(0%)" : "",
         }}
      >
         <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
               <Image
                  alt={title}
                  src={imageSrc}
                  width={100}
                  height={100}
                  className="w-20 h-20 aspect-square rounded-md"
               />
               <div className="flex flex-col">
                  <h5 className="text-main font-semibold max-w-[20ch]">{title}</h5>
                  <span className="font-medium text-main text-sm">{chapter}</span>
                  <span className="font-medium text-main text-xs">
                     {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
               </div>
            </div>
            <div className="flex items-center gap-2">
               <Button
                  kind="primary"
                  variant="light"
                  className="w-8 h-8 p-1 rounded-full "
               >
                  <IconPlayerPlay size={18} />
               </Button>
               <Button
                  kind="primary"
                  size="sm"
                  variant="light"
                  className="w-8 h-8 p-1 rounded-full "
                  onClick={() => {
                     dispatch(triggerModal({ modal: "compactPlayer", trigger: false }));
                  }}
               >
                  <IconX size={18} />
               </Button>
            </div>
         </div>
      </div>
   );
};

export default CompactPlayer;
