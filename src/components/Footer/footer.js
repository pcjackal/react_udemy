import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

import style from './footer.css'
import { CURRENT_YEAR } from '../../config'

const Footer = () => {
  return (
    <div className={style.footer}>
      <BrowserRouter>
        <Link to="/" className={style.logo}>
            <img alt="nba logo" src="/images/nba_logo.png" />
        </Link>
      </BrowserRouter>
      <div className={style.right}>
        @NBA {CURRENT_YEAR} All rightsreserved
      </div>
    </div>
  )
}

export default Footer
