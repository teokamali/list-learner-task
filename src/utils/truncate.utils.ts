export function truncate(text: string, maxLength: number, truncationStyle: "end" | "center" = "end") {
   if (text.length <= maxLength) {
      return text;
   }

   switch (truncationStyle) {
      case "end":
         return `${text.substring(0, maxLength)}...`;
      case "center": {
         const halfLength = Math.floor(maxLength / 2);
         const firstHalf = text.substring(0, halfLength);
         const secondHalf = text.substring(text.length - halfLength);
         return `${firstHalf}...${secondHalf}`;
      }
      default:
         throw new Error("Invalid truncation style");
   }
}
