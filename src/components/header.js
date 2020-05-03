import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site{
        siteMetadata{
          title
        }
      }
    }
    `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link> 
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li><Link className={headerStyles.navLinks} activeClassName={headerStyles.activeNavLinks} to="/"> Home </Link></li>
          <li><Link className={headerStyles.navLinks} activeClassName={headerStyles.activeNavLinks} to="/project"> Project </Link></li>
          <li><Link className={headerStyles.navLinks} activeClassName={headerStyles.activeNavLinks} to="/contact"> Contact </Link></li>
          {/* <li><Link className={headerStyles.navLinks} activeClassName={headerStyles.activeNavLinks} to="/about"> About </Link></li>  */}
        </ul>
      </nav>
    </header>
  )
}

export default Header