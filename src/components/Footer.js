import * as React from "react"
import { Link } from "gatsby"

import Online from "./Online"

const Footer = ({ author, internalLinks }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <Online is_footer />
          <ul className="footer__content__ul site_nav">
            {
              internalLinks.map(navItem => (
                <li key={ navItem.name }>
                  <Link to={ navItem.link }>
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
      </div>
    </footer>
  )
}

export default Footer

