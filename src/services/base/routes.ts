export const getApiRoute = () => {
   const routes = {
      auth: {
         login: {
            path: "auth/login",
            get: function (slug: string) {
               return `/${this.path}/${slug}`;
            },
         },
      },
   };
   return routes;
};
