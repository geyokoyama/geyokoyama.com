import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Online = ({ is_footer }) => {

  const profiles = [
    { icon: <FontAwesomeIcon icon={faGithub} className="icon fa-2xl"/>, url: `https://github.com/geyokoyama`, name: `GitHub` },
    { icon: <FontAwesomeIcon icon={faLinkedin} className="icon fa-2xl"/>, url: `https://www.linkedin.com/in/georgeyokoyama/`, name: `LinkedIn` },
    { icon: <FontAwesomeIcon icon={faEnvelope} className="icon fa-2xl"/>, url: `mailto:george@geyokoyama.com`, name: `Email` },
  ]

  return (
    <ul className={`flex flex-row gap-y-1 gap-x-6 sm:w-fit`}>
      {
        profiles.map(profile => (
          <li className="flex items-center relative" key={ profile.name }>
            <a href={ profile.url } className="hover:text-teal-500 focus:text-teal-500 active:text-teal-900 text-lg before:absolute before:inset-0">
              { profile.icon }
            </a>
          </li>
        ))
      }
    </ul>
  )
}

export default Online

