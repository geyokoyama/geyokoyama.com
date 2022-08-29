import * as React from "react"
import { Link } from "gatsby"

import Online from "./Online"

const Footer = ({ author, internalLinks }) => (
  <footer className="footer">
    <div className="container">
      <Online is_footer />
      <ul className="footer__ul site_nav">
        {
          internalLinks.map(navItem => (
            <li className="footer__ul__li" key={ navItem.name }>
              <Link
                to={ navItem.link }
                activeClassName="active"
                className={ `navItem ${navItem.name.toLowerCase()}` }
              >
                { navItem.name }
              </Link>
            </li>
          ))
        }
      </ul>
      <small className="footer__content__copyright">
        &copy; 2022 { author }
      </small>
    </div>
  </footer>
)

export default Footer

