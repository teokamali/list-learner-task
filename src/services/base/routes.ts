export const getApiRoute = () => {
   const routes = {
      auth: {
         auth: {
            path: "auth",
            get: function (slug: string) {
               return `/${this.path}/${slug}`;
            },
         },
         message: {
            path: "auth/message",
            get: function (slug: string) {
               return `/${this.path}/${slug}`;
            },
         },
      },
      user: {
         getUser: {
            path: "user",
            get(slug: string) {
               return `/${this.path}/${slug}`;
            },
         },
         register: {
            path: "user/register",
            get(slug: string) {
               return `/${this.path}/${slug}`;
            },
         },
         currentBalance: {
            path: "user/balance",
            get(slug: string) {
               return `/${this.path}/${slug}`;
            },
         },
      },
      games: {
         mine: {
            rules: {
               path: "dream-mine/rules",
            },
            bet: {
               path: "dream-mine/bet",
            },
            mineBlock: {
               path: "dream-mine/mine/",
               get(id: string) {
                  return `${this.path}${id}`;
               },
            },
            backoffMine: {
               path: "dream-mine/backoff/",
               get(id: string) {
                  return `${this.path}${id}`;
               },
            },
            isPlaying: {
               path: "dream-mine/is-playing",
            },
            mineGamesList: {
               path: "dream-mine",
            },
         },
      },
   };
   return routes;
};
