import "./Header.scss"
import Marker from "../../elements/Marker";

function Header() {
  return (
    <div className="header-wrapper">
      <ul className="header-list">
        <li className="header-list__item">
          <a href="#">
            Homepage
            <Marker title="home"/>
          </a>
        </li>
        <li className="header-list__item">
          <a href="#">
            Projects
            <Marker title="projects"/>
          </a>
        </li>
        <li className="header-list__item">
          <a href="#">
            Contact
            <Marker title="contact"/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Header;