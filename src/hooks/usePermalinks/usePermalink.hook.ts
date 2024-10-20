export const usePermalink = () => {
   const internalLinks = {
      podcasts: {
         slug: "/",
         get: (slug: string) => `/podcasts/${slug}`,
      },
      books: {
         slug: "/books",
         get: (slug: string) => `/books/${slug}`,
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
