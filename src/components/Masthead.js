import * as React from "react"
import { Link } from "gatsby"


const Masthead = ({ siteTitle, internalLinks }) => (
  <header>
    <nav className="max-w-screen-xl m-auto p-3 flex flex-col text-2xl sm:flex-row sm:justify-between">
      <Link to="/" className="py-0.5">
        <span className="text-2xl font-bold border-4 border-teal-900 px-2 py-1.5 inline-block">
          GY
        </span>
      </Link>
      <ul className="flex flex-row flex-wrap gap-y-1 gap-x-5">
        {
          internalLinks.map(navItem => (
              <li className="first:hidden" key={ navItem.name }>
                <span className="relative py-2.5 block overflow-hidden">
                  <Link
                    to={ navItem.link }
                    partiallyActive={ true }
                    activeClassName="active"
                    className="text-3xl focus:text-teal-500 active:text-teal-500 font-semibold peer"
                  >
                    { navItem.name }.
                  </Link>
                  <span className="absolute bg-teal-900 peer-active:bg-teal-500 bottom-0 left-0 h-1 w-full transition ease-in-out duration-300 -translate-x-full peer-hover:translate-x-0 peer-active:translate-x-0" aria-hidden="true"></span>
                </span>
              </li>
          ))
        }
      </ul>
    </nav>
  </header>
)

export default Masthead

