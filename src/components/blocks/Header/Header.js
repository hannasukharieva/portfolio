import { useState, useEffect } from 'react';

// Styles
import "./Header.scss";

// Assets
import Marker from "../../elements/Marker";

const Header = () => {
  const [isTop, setIsTop] = useState(true)

  const handleScroll = () => {
    if (window.scrollY < 100) {
      setIsTop(true)
    } else {
      setIsTop(false)
    }
  }

  useEffect(() => {
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