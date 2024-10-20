export const getDomain = () => {
   let domain = window.location.hostname;
   domain = domain.split(".").slice(-2).join(".");
   domain = `.${domain}`;
   return domain;
};
