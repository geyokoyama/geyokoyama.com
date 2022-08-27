import * as React from "react"

import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import email from "../assets/email.png"

const Online = ({ is_footer }) => {

  const profiles = [
    { icon_url: github, url: `https://github.com/geyokoyama`, name: `GitHub`, description: `It's my repo!` },
    { icon_url: linkedin, url: `https://www.linkedin.com/in/georgeyokoyama/`, name: `LinkedIn`, description: `Professional networking!` },
    { icon_url: email, url: `mailto:george@geyokoyama.com`, name: `Email`, description: `Hello there!` },
  ]

  return (
    <ul className={ "online" + (is_footer ? " footer__content__ul": "") }>
      {
        profiles.map(profile => (
          <li key={ profile.name }>

            <a href={ profile.url }>
              <img className="icon" src={ profile.icon_url } alt={ profile.name } />
            </a>

            {!is_footer && (
              <div className="text">
                <div className="name">
                  { profile.name }
                </div>
                <div className="description">{ profile.description }</div>
              </div>
            )}

          </li>
        ))
      }
    </ul>
  )
}

export default Online

