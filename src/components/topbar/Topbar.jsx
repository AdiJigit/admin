import React from 'react'
import './topbar.css'
import { MdOutlineNotifications } from 'react-icons/md'
import { MdLanguage } from 'react-icons/md'
import { IoIosSettings } from 'react-icons/io'

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className='logo'>Admin Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <MdOutlineNotifications size={25} />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <MdLanguage size={25} />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <IoIosSettings size={25} />
          </div>
          <img src="https://wallpaper.dog/large/20542508.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
