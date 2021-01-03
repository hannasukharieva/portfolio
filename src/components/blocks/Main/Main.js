// Styles
import "./Main.scss";

// Assets
import portrait from "../../../assets/images/portrait.jpg";

// Components
import Card from "../../elements/Card";

const Main = () => (
  <section className="main-wrapper" id="main">
    <div className="main__photo">
      <Card sign="Just me!" image={portrait} />
    </div>
    <div className="main__text">
      <div className="main__text-paragraph">
        <span className="main__text-title">Name</span>
        <p className="main__text-content">Hanna Sukharieva</p>
      </div>

      <div className="main__text-paragraph">
        <span className="main__text-title">Wins</span>
        <p className="main__text-content">
          <ul>
            <li>Star Tech Writer for major fintechs</li>
            <li>Front End Development Enthusiast</li>
            <li>5 non-native languages</li>
          </ul>
        </p>
      </div>

      <div className="main__text-paragraph">
        <span className="main__text-title">Likes</span>
        <p className="main__text-content">
          <ul>
            <li>Sports</li>
            <li>Popular Science</li>
            <li>Traveling</li>
          </ul>
        </p>
      </div>
    </div>
  </section>
)

export default Main;