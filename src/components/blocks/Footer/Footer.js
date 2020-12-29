import "./Footer.scss";
import facebook from "../../../assets/images/icons/facebook.png"
import linkedin from "../../../assets/images/icons/linkedn.png"
import instagram from "../../../assets/images/icons/instagram.png"
import git from "../../../assets/images/icons/git.png"

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer">
        <ul className="footer__list">
          <li>Hanna Sukharieva</li>
          <li><a href="mailto:hsukharieva@gmail.com">hsukharieva@gmail.com</a></li>
          <li>London</li>
        </ul>
      </div>
      <div className="footer__icons">
        <a href="https://www.facebook.com/hsukhari/" target="_blank"><img className="icon-image" src={facebook} /></a>
        <a href="https://www.linkedin.com/in/hanna-sukharieva-55287b127" target="_blank"><img className="icon-image" src={linkedin} /></a>
        <a href="https://www.instagram.com/anniethefox" target="_blank"><img className="icon-image" src={instagram} /></a>
        <a href="https://github.com/hannasukharieva" target="_blank"><img className="icon-image" src={git} /></a>
      </div>
    </footer>
  )
}


export default Footer;