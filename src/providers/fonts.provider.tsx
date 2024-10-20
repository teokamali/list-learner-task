import type { BaseProps } from "@/types/global.types";
import { Dancing_Script, Roboto } from "next/font/google";

const RobotoFont = Roboto({ weight: "400", subsets: ["latin"], variable: "--font-roboto" });
const DancingFont = Dancing_Script({ weight: "400", subsets: ["latin"], variable: "--font-dancing" });

const FontsProvider: BaseProps = ({ children }) => {
   return <div className={`${RobotoFont.variable} ${DancingFont.variable}`}>{children}</div>;
};

export default FontsProvider;
