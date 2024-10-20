export interface ListItem {
   id: number;
   image: string;
   title: string;
   subtitle: string;
   slug: string;
   category: "podcasts" | "books";
}
