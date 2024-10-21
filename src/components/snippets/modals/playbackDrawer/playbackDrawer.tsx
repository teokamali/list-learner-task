import { Button } from "@/components/common/button/button";
import { triggerModal } from "@/store/slices/modal/modal.slice";
import { useAppDispatch } from "@/store/store";
import { formatTime } from "@/utils/fotmat.utils";
import { truncate } from "@/utils/truncate.utils";
import {
   IconBookmark,
   IconBrandSpeedtest,
   IconChevronDown,
   IconMessage,
   IconPlayerPlay,
   IconPlayerSkipForward,
   IconRewindBackward15,
   IconRewindForward15,
   IconX,
} from "@tabler/icons-react";

const samplePodcastData: PodcastPlayerProps = {
   title: "Rejecting Social Norms For Justice",
   chapter: "Chapter 7",
   chapterName: "The Daily Stoice",
   imageSrc: "https://picsum.photos/150?random=1",
   progress: 4 * 60 + 24, // 4 minutes and 24 seconds
   duration: 17 * 60 + 39, // 17 minutes and 39 seconds
   currentTime: 4 * 60 + 24, // Same as progress to start with
};

const PodcastPlayer = () => {
   const { chapter, currentTime, duration, imageSrc, chapterName, title } = samplePodcastData;
   const dispatch = useAppDispatch();

   return (
      <div
         className={
            "text-white p-4 space-y-4 w-full h-full relative z-50 before:absolute before:inset-0 before:bg-black/60"
         }
         style={{
            background: `url(${imageSrc})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
         }}
      >
         {/* Header */}
         <div className="flex justify-between items-center gap-4 z-10 relative">
            <div className="flex items-center gap-2">
               <Button
                  kind="primary"
                  size="sm"
                  variant="light"
                  className="w-6 h-6 p-1 rounded-full text-[8px]"
                  onClick={() => {
                     dispatch(triggerModal({ modal: "playbackDrawer", trigger: false }));
                     dispatch(triggerModal({ modal: "compactPlayer", trigger: true }));
                  }}
               >
                  <IconChevronDown size={18} />
               </Button>
               <h2 className="text-base font-bold">{truncate(title, 15, "center")}</h2>
            </div>
            <div className="flex items-center gap-2">
               <Button
                  kind="primary"
                  size="sm"
                  variant="light"
                  className="w-6 h-6 p-1 rounded-full "
               >
                  <IconBookmark size={18} />
               </Button>
               <Button
                  kind="primary"
                  size="sm"
                  variant="light"
                  className="w-6 h-6 p-1 rounded-full "
               >
                  <IconMessage size={18} />
               </Button>
               <Button
                  kind="primary"
                  size="sm"
                  variant="light"
                  className="w-6 h-6 p-1 rounded-full "
                  onClick={() => {
                     dispatch(triggerModal({ modal: "playbackDrawer", trigger: false }));
                  }}
               >
                  <IconX size={18} />
               </Button>
            </div>
         </div>

         {/* Podcast Image */}
         <div className="flex justify-center z-10 relative">
            <img
               src={imageSrc}
               alt="Podcast"
               className="rounded-lg w-32 h-32"
            />
         </div>

         {/* Chapter Title */}
         <div className="z-10 relative">
            <p className="text-sm font-semibold">{chapter}</p>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-xs mt-1 font-medium">{chapterName}</p>
         </div>

         {/* Progress Bar */}
         <div className="z-10 relative">
            <input
               type="range"
               className="inputRange w-full"
               min="0"
               max={duration}
               value={currentTime}
               onChange={() => {}}
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
               <span>{formatTime(currentTime)}</span>
               <span>{formatTime(duration)}</span>
            </div>
         </div>

         {/* Controls */}
         <div className="flex items-center justify-between z-10 relative">
            <Button
               kind="primary"
               variant="light"
               className="rounded-full"
            >
               <IconBrandSpeedtest size={18} />
            </Button>
            <Button
               kind="primary"
               variant="light"
               className="rounded-full"
            >
               <IconRewindBackward15 size={18} />
            </Button>
            <Button
               kind="primary"
               variant="light"
               className="rounded-full"
            >
               <IconPlayerPlay size={18} />
            </Button>
            <Button
               kind="primary"
               variant="light"
               className="rounded-full"
            >
               <IconRewindForward15
                  className="relative"
                  size={18}
               />
            </Button>
            <Button
               kind="primary"
               variant="light"
               className="rounded-full"
            >
               <div>
                  <IconPlayerSkipForward size={18} />
               </div>
            </Button>
         </div>

         {/* Chapter list */}
         <ul className="space-y-2 z-10 relative">
            {Array(5)
               .fill(0)
               .map((_, index) => (
                  <li
                     key={`next-${index + 1}}`}
                     className="flex justify-between"
                  >
                     <p>Rejecting Social Norms For</p>
                     <button className="text-gray-400 hover:text-white">
                        <IconPlayerPlay />
                     </button>
                  </li>
               ))}
         </ul>
      </div>
   );
};

export default PodcastPlayer;
