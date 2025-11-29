import React from 'react'
import Sidebar from '../SidebarContent'

const SidebarLayoutMobile = ({setSidebar,sidebar}) => {
  return (
     <div className={`md:hidden`}>
      
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
  )
}

export default SidebarLayoutMobile