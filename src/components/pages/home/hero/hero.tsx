import HeroCard from "./heroCard/heroCard";
import { IHeroCard } from "./heroCard/heroCard.types";

const Hero = () => {
   const cards: IHeroCard[] = [
      {
         color: "#5A3B20",
         cardContent: {
            image: "https://picsum.photos/150?random=1",
            name: "The Joe Rogan Experience",
            episode: 153,
            description:
               "Joe sits down with Joe Pyfer, a professional mixed martial artist competing in the Middleweight division of the UFC.",
         },
      },
      {
         color: "#836919",
         cardContent: {
            image: "https://picsum.photos/150?random=2",
            name: "This Past Weekend with Theo Von",
            episode: 13,
            description: "Listeners ready to tune in for pure entertainment have found the right podcast.",
         },
      },
      {
         color: "#124A6B",
         cardContent: {
            image: "https://picsum.photos/150?random=3",
            name: "Huberman Lab",
            episode: 3,
            description:
               "You can find the full transcript below. Here, I will provide a brief summary of each question and the answer provided by Andrew.",
         },
      },
      {
         color: "#8A1917",
         cardContent: {
            image: "https://picsum.photos/150?random=4",
            name: "Behind the Bastards",
            episode: 5,
            description:
               "There's a reason the History Channel has produced hundreds of documentaries about Hitler but only a few about Dwight.",
         },
      },
   ];
   return (
      <div className="grid grid-cols-2 grid-rows-2 gap-1">
         {cards.map((card) => {
            return (
               <HeroCard
                  key={card.color}
                  cardContent={card.cardContent}
                  color={card.color}
               />
            );
         })}
      </div>
   );
};

export default Hero;
