import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MainLayout from "./components/Layout/Main";
import DesktopSidebarLayout from "./components/Layout/SidebarLayout";
import SidebarLayoutMobile from "./components/Layout/SidebarLayoutMobile";

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="overflow-hidden min-h-screen w-[100vw]" >
      <Navbar setSidebar={setSidebar} sidebar={sidebar} />
      <div className="flex w-full">
        <MainLayout sidebar={sidebar} />
        <DesktopSidebarLayout sidebar={sidebar} />
      </div>
      <SidebarLayoutMobile sidebar={sidebar} setSidebar={setSidebar} />
    </div>
  );
};

export default App;
