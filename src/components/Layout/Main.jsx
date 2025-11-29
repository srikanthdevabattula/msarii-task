import React from "react";
import Main from "../Main";

const MainLayout = ({sidebar}) => {
  return (
     <div
          className={`
    transition-all duration-300
    w-full min-w-0               
    md:${sidebar ? "w-[calc(100%-319px)]" : "w-full"}
  `}
        >
          <div className="md:pt-3 pt-2 md:pr-3 bg-[#728cb982] h-[calc(100vh-90px)] overflow-x-auto scrollbar-hide">
            <Main />
          </div>
        </div>
  );
};

export default MainLayout;
