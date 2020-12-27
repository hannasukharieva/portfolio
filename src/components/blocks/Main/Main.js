import "./Main.scss"
import portrait from "../../../assets/images/portrait.jpg"

function Main() {
  return (
    <section className="main-wrapper">
      <div className="main__photo">
        <div className="card">
          <img className="card__photo" src={portrait}/>
        </div>
      </div>
      <div className="main__text">
        <div className="main__text-paragraph">
          <span className="main__text-title">Name</span>
          <p className="main__text-content">Lorem Ipsum</p>
        </div>
        <div className="main__text-paragraph">
          <span className="main__text-title">Bio</span>
          <p className="main__text-content">
            <span>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
          </p>
        </div>
        <div className="main__text-paragraph">
          <span className="main__text-title">Wins</span>
          <p className="main__text-content">
            <span>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Main;