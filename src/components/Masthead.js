import * as React from "react"
import { Link } from "gatsby"

const Masthead = ({ siteTitle, internalLinks }) => (
  <header className="masthead">
    <div className="container">
      <nav>
        <Link to="/" className="masthead__brand">{ siteTitle }</Link>
        <ul className="masthead__nav site_nav">
          {
            internalLinks.map(navItem => (
              <li className="masthead__nav--item" key={ navItem.name }>
                <Link
                  to={ navItem.link }
                  partiallyActive={ true }
                  activeClassName="active"
                  className={ `navItem ${navItem.name.toLowerCase()}` }
                >
                  { navItem.name }
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  </header>
)

export default Masthead

