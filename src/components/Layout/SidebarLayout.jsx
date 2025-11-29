import React from 'react'
import Sidebar from '../SidebarContent'

const DesktopSidebarLayout = ({sidebar}) => {
  return (
    <div>
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
  )
}

export default DesktopSidebarLayout