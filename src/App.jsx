import React, { useState } from "react";
import Navbar from "./components/Navbar";
 // separate file for the actual sidebar content
import GroupTable from "./components/MainComponents/GroupTable";
import Sidebar from "./components/SidebarContent";
import Main from "./components/Main";
import GroupTableSkeleton from "./components/MainComponents/GroupTableSkeleton";

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="overflow-hidden min-h-screen">
      <Navbar setSidebar={setSidebar} sidebar={sidebar} />

      {/* MAIN */}
      <div className="flex w-full">
        {/* LEFT SECTION */}
       
<div
  className={`
    transition-all duration-300
    w-full min-w-0                // ⭐ MUST HAVE
    md:${sidebar ? "w-[calc(100%-319px)]" : "w-full"}
  `}
>
  <div className="md:pt-3 pt-2 md:pr-3 bg-[#728cb982] h-[calc(100vh-90px)] overflow-x-auto scrollbar-hide">   {/* ⭐ MAIN scrolls */}
  
    <Main />
  </div>
</div>



        {/* DESKTOP SIDEBAR */}
        <div className={`hidden md:block transition-all duration-300`}>
          <div
            className={`
             
              h-[calc(100vh-90px)]
              ${sidebar ? "w-[319px] overflow-auto " : "w-0 overflow-hidden"}
              transition-all duration-300
            `}
          >
            {sidebar && <Sidebar />}
          </div>
        </div>
      </div>

      <div className={`md:hidden`}>
        {/* Mobile Sidebar panel */}
        <div
          className={`
            fixed z-40 right-0 top-[70px] 
            h-[calc(100vh-70px)] w-full
            transform transition-transform duration-300
            ${sidebar ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="w-full h-full  overflow-auto">
            <Sidebar onClose={() => setSidebar(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
