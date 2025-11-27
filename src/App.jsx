import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SidebarContent from "./components/SidebarContent"; // separate file for the actual sidebar content

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
            bg-green-300
            transition-all duration-300
            w-full
            md:${sidebar ? "w-[calc(100%-319px)]" : "w-full"}
          `}
        >
          <div className="p-4">left</div>
        </div>

        {/* DESKTOP SIDEBAR */}
        <div className={`hidden md:block transition-all duration-300`}>
          <div
            className={`
              bg-red-400
              h-[calc(100vh-90px)]
              ${sidebar ? "w-[319px]" : "w-0 overflow-hidden"}
              transition-all duration-300
            `}
          >
            {sidebar && <SidebarContent />}
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
          <div className="w-full h-full bg-red-400 overflow-auto">
            <SidebarContent onClose={() => setSidebar(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
