import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            roboto: ["var(--font-roboto)"],
            dancing: ["var(--font-dancing)"],
         },
         colors: {
            // Semantic Colors
            primary: "#286DF0",
            secondary: "#286DF0", // Card
            info: "#475766", // Heading
            warning: "#E7AA2E",
            success: "#1AA9FD",
            danger: "#F40F46",
            main: "#798998", // Text
            //  Colors
            white: "#FEFEFE",
            dark: "#0f141a", // Default BG
            light: "hsla(0, 0%, 100%, 0.3)",
            navy: "#1A1F25", // Border
            red: {
               500: "#FF3B30",
               700: "#F94040",
            },
            yellow: {
               500: "#FFD600",
            },
         },
         screens: {
            sm: "540px",
            md: "720px",
            lg: "960px",
            xl: "1142px",
            "2xl": "1536px",
         },
         container: {
            center: true,
            padding: "1rem",
         },
         fontSize: {
            "relative-xl": "calc(1.7rem + 2.4vmin)",
            "relative-2xl": "calc(2.4rem + 2.5vmin)",
         },
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            "gradient-primary": "linear-gradient(95.08deg, #32CD32 0%, #2ECC71 100%)",
            "gradient-yellow-dark":
               "linear-gradient(89.73deg, rgba(255, 230, 0, 0.3) 0.17%, rgba(255, 229, 0, 0) 115.55%)",
            "gradient-navy": "linear-gradient(90deg, rgba(45, 48, 93, 1),rgba(94, 101, 195, 1))",
            "gradient-hot-pink": "linear-gradient(90deg, rgba(199, 56, 184, 1),rgba(97, 27, 90, 1))",
            "gradient-dark-purple":
               "linear-gradient(0deg, rgba(45, 48, 93, 0.42), rgba(45, 48, 93, 0.42)),linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
         },
         animation: {
            "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
         },
         keyframes: {
            "border-beam": {
               "100%": {
                  "offset-distance": "100%",
               },
            },
         },
      },
   },
   plugins: [],
};
export default config;
