import React, { useState } from 'react'
import './navbar.scss'
import {Search,Notifications,ArrowDropDown} from '@mui/icons-material'

export default function Navbar() {
    const [isScrolled, setIsScrolled]=useState(false)

    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset ===0 ? false : true)
        return ()=>window.onscroll=null
    }

    console.log(isScrolled)

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
            <img src="./asset/logo.png" alt="" />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
        </div>
        <div className="right">
            <Search className='icon'/>
            <span>KID</span>
            <Notifications className='icon'/>
            <img src="./asset/avata.jpg" alt="" />
            <div className='profile'>
                <ArrowDropDown className='icon'/>
                <div className='options'>
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
