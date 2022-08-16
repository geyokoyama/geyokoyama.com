import * as React from "react"
import { Link } from "gatsby"

import Online from './Online'

const primaryNavItems = [
  { url: "/", label: "Home" },
  { url: "/blog", label: "Blog" },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <Online is_footer />
          <ul className="footer__content__ul site_nav">
            {
              primaryNavItems.map(item => (
                <li key={ item.label }>
                  <Link to={ item.url }>
                    { item.label }
                  </Link>
                </li>
              ))
            }
          </ul>
          <small className="footer__content__copyright">
            &copy; 2022 George E. Yokoyama
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer

