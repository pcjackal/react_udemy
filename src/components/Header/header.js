import React from 'react'
import style from './header.css'
import { Link, BrowserRouter } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'
import SideNavigation from './SideNav/sideNav';

const Header = (props) => {

  const navBars = () => (
    <div className="bars">
        <FontAwesome name="bars"
            onClick={props.onOpenNav}
            style={{
                color: '#FFF',
                padding: '10px',
                cursor: 'pointer'
            }}
        />
    </div>
  )

  const logo = () => (
    <BrowserRouter>
        <Link to="/" className={style.logo}>
            <img alt="nba logo" src="/images/nba_logo.png" />
        </Link>
    </BrowserRouter>
  )

  return (
    <header className={style.header}>
      <SideNavigation {...props} />
      <div className={style.headerOpt}>
        { navBars() }
        { logo() }
      </div>
    </header>
  )
}

export default Header
