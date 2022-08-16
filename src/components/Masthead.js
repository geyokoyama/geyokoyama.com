import * as React from "react"
import { Link } from "gatsby"

const primaryNavItems = [
  { url: "/blog", label: "Blog" },
]

const Masthead = () => {
  return (
    <header className="masthead">
      <div className="container">
        <nav>
          <Link to="/" className="masthead__brand">George Yokoyama</Link>
          <ul className="masthead__nav site_nav">
            {
              primaryNavItems.map(item => (
                <li className="masthead__nav--item" key={ item.label }>
                  <Link to={ item.url }>
                    { item.label }
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Masthead

