import { useState, useEffect } from 'react'

import "./Header.scss"
import Marker from "../../elements/Marker";

function Header() {
  const [isTop, setIsTop] = useState(true)

  function handleScroll() {
    if (window.scrollY < 100) {
      setIsTop(true)
    } else {
      setIsTop(false)
    }
  }

  useEffect(function() {
    window.addEventListener('scroll', handleScroll)
  }, []);

  const isTopClass = isTop ? 'header-list--top' : '';

  return (
    <div className="header-wrapper">
      <ul className={"header-list " + isTopClass}>
        <li className="header-list__item">
          <a href="#main">
            Homepage
            <Marker title="home"/>
          </a>
        </li>
        <li className="header-list__item">
          <a href="#projects">
            Projects
            <Marker title="projects"/>
          </a>
        </li>
        <li className="header-list__item">
          <a href="#contact">
            Contact
            <Marker title="contact"/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Header;