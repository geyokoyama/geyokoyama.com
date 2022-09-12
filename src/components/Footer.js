import * as React from "react"
import { Link } from "gatsby"

import Online from "./Online"

const Footer = ({ author, internalLinks }) => (
  <footer>
    <div className="max-w-screen-xl m-auto px-3 pb-10 pt-20 flex flex-col gap-y-3">
      <Online />
      <ul className="flex flex-row flex-wrap gap-y-1 gap-x-4">
        {
          internalLinks.map(navItem => (
            <li key={ navItem.name }>
              <span className="relative py-2.5 block overflow-hidden">
                <Link
                  to={ navItem.link }
                  activeClassName="active"
                  className="text-xl focus:text-teal-500 active:text-teal-500 font-semibold peer"
                >
                  { navItem.name }.
                </Link>
                <span className="absolute bg-teal-900 peer-active:bg-teal-500 bottom-0 left-0 h-1 w-full transition ease-in-out duration-300 -translate-x-full peer-hover:translate-x-0 peer-active:translate-x-0" aria-hidden="true"></span>
              </span>
            </li>
          ))
        }
      </ul>
      <small className="">
        &copy; 2022 { author }
      </small>
    </div>
  </footer>
)

export default Footer

