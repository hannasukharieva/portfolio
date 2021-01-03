import "./Card.scss";

const Card = (props) => (
  <a href={props.link} target="_blank" rel="noreferrer">
    <div className="card">
      <img className="card__photo" alt="A Polaroid card with visuals." src={props.image} />
      <p className="card__text">{props.sign}</p>
    </div>
  </a>
)

export default Card;