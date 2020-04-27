import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          Yenisbel Valle
        </Link> 
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li><Link className={headerStyles.navLinks} activeClassName={headerStyles.activeNavLinks} to="/contact"> Contact </Link></li>
          <li><Link className={headerStyles.navLinks} activeClassName={headerStyles.activeNavLinks} to="/about"> About </Link></li>
          <li><Link className={headerStyles.navLinks} activeClassName={headerStyles.activeNavLinks} to="/blog"> Blog </Link></li>
          <li><Link className={headerStyles.navLinks} activeClassName={headerStyles.activeNavLinks} to="/"> Home </Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header