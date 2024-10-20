export const usePermalink = () => {
   const internalLinks = {
      home: {
         slug: "/",
         get: () => "/",
      },
      auth: {
         login: {
            slug: "/auth/login",
            get: (callback_url: string) => `/auth/login?callback_url=${callback_url}`,
         },
      },
   };

   const externalLinks = {
      telegram: {
         slug: "/",
         get: () => "/",
      },
      discord: {
         slug: "/",
         get: () => "/",
      },
   };

   return { internalLinks, externalLinks };
};
