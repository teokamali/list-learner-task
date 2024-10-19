import type { BaseProps } from "@/types/global.types";

const MainLayout: BaseProps = ({ children }) => {
   return <div className="font-roboto">{children}</div>;
};

export default MainLayout;
