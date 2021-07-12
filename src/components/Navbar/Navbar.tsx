import React from 'react';
import s from './Navbar.module.css'

const NavBar = () => {
    return (
        <nav className={s.nav}>
          <div className={s.navPages}>
          <div className={`${s.item} ${s.active}`}><a>Profile</a></div>
          <div className={s.item}><a>Messages</a></div>
          <div className={s.item}><a>Music</a></div>
          <div className={s.item}><a>News</a></div>
          <div className={s.item}><a>Settings</a></div>
          </div>
        </nav>
    )
}

export default NavBar;