import "./Footer.scss";
import facebook from "../../../assets/images/icons/facebook.png"
import linkedin from "../../../assets/images/icons/linkedn.png"
import instagram from "../../../assets/images/icons/instagram.png"
import git from "../../../assets/images/icons/git.png"

const Footer = () => (
  <footer className="footer-wrapper">
    <div className="footer" id="contact">
      <ul className="footer__list">
        <li>Hanna Sukharieva</li>
        <li><a href="mailto:hsukharieva@gmail.com">hsukharieva@gmail.com</a></li>
        <li>London</li>
      </ul>
    </div>
    <div className="footer__icons">
      <a href="https://www.facebook.com/hsukhari/" target="_blank" rel="noreferrer">
        <img className="icon-image" alt="facebook-icon" src={facebook} />
      </a>
      <a href="https://www.linkedin.com/in/hanna-sukharieva-55287b127" target="_blank" rel="noreferrer">
        <img className="icon-image" alt="linkedin-icon" src={linkedin} />
      </a>
      <a href="https://www.instagram.com/anniethefox" target="_blank" rel="noreferrer">
        <img className="icon-image" alt="instagram-icon" src={instagram} />
      </a>
      <a href="https://github.com/hannasukharieva" target="_blank" rel="noreferrer">
        <img className="icon-image" alt="github-icon" src={git} />
      </a>
    </div>
  </footer>
)


export default Footer;