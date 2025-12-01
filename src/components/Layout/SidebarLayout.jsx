import React from 'react'
import Sidebar from '../SidebarContent'

const DesktopSidebarLayout = () => {
  return (
    <div>
      <div className="hidden md:block h-[calc(100vh-90px)] w-[319px] overflow-auto">
        <Sidebar />
      </div>
    </div>
  )
}

export default DesktopSidebarLayout
