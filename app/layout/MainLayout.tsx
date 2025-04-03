import { themeSelector } from "@/lib/slides/theme/selector";
import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";

type Props = { children: React.ReactNode };

const MainLayout = (props: Props) => {
  const { children } = props;
  const theme = useSelector(themeSelector);

  return (
    <div className="">
      <div className={`${theme}`}>
        <div className="dark:bg-gray-800 bg-white min-h-[100vh] flex flex-col justify-between">
          <Header />
          <section className="2xl:w-[1366px] py-4 w-full m-auto dark:bg-gray-800 flex-1">
            {children}
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
