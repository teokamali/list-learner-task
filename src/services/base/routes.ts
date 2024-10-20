export const getApiRoute = () => {
   const routes = {
      auth: {
         auth: {
            path: "auth",
            get: function (slug: string) {
               return `/${this.path}/${slug}`;
            },
         },
      },
   };
   return routes;
};
