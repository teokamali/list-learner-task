export interface IHeroCard {
   color: `#${string}`;
   cardContent: IHeroCardContent;
}

export interface IHeroCardContent {
   image: string;
   name: string;
   episode: number;
   description: string;
}
