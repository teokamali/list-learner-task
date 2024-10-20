import { Button } from "@/components/common/button/button";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ListItem } from "./filteredList.types";

const items: ListItem[] = [
   {
      id: 1,
      image: "https://picsum.photos/150?random=1",
      title: "The Joe Rogan Experience",
      subtitle: "Joe Rogan",
      slug: "joe-rogan",
      category: "podcasts",
   },
   {
      id: 2,
      image: "https://picsum.photos/150?random=2",
      title: "Past Weekend",
      subtitle: "Theo Von",
      slug: "Theo-Von",
      category: "podcasts",
   },
   {
      id: 3,
      image: "https://picsum.photos/150?random=3",
      title: "I Am Not Your Perfect Mexican Daughter",
      subtitle: "Erika L. Sanchez",
      category: "books",
      slug: "Erika-L-Sanchez",
   },
   {
      id: 4,
      image: "https://picsum.photos/150?random=4",
      title: "Girl In The Blue Coat",
      subtitle: "Monica Hesse",
      category: "books",
      slug: "Monica-Hesse",
   },
];

const FilteredList: React.FC = () => {
   const [filter, setFilter] = useState<"all" | "podcasts" | "books">("all");

   const filteredItems = items.filter((item) => (filter === "all" ? true : item.category === filter));

   return (
      <div className="">
         {/* Filter Buttons */}
         <div className="flex gap-2 px-3 mb-4">
            <Button
               size="sm"
               variant={filter === "all" ? "primary" : "light"}
               kind="primary"
               className={"px-3 py-2"}
               onClick={() => setFilter("all")}
            >
               All
            </Button>
            <Button
               size="sm"
               variant={filter === "podcasts" ? "primary" : "light"}
               kind="primary"
               className={"px-3 py-2"}
               onClick={() => setFilter("podcasts")}
            >
               Podcast
            </Button>
            <Button
               size="sm"
               kind="primary"
               className={"px-3 py-2"}
               variant={filter === "books" ? "primary" : "light"}
               onClick={() => setFilter("books")}
            >
               Books
            </Button>
         </div>

         {/* List Items */}
         <ul className="flex flex-col gap-y-3">
            {filteredItems.map((item) => (
               <li key={item.id}>
                  <Link
                     href={`${item.category}/${item.slug}`}
                     className="flex items-center justify-between text-white rounded-lg shadow hover:bg-white/5 px-3 py-2 transition-colors duration-200"
                  >
                     <div className="flex items-center gap-2">
                        <Image
                           src={item.image}
                           alt={item.title}
                           width={150}
                           height={150}
                           className="w-14 h-14 rounded"
                        />
                        <div>
                           <h3 className="text-xs font-bold">{item.title}</h3>
                           <p className="text-sm text-gray-400">{item.subtitle}</p>
                        </div>
                     </div>
                     <span className="text-gray-400">
                        <IconArrowRight />
                     </span>
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default FilteredList;
