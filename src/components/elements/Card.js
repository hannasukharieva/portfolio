import "./Card.scss";

function Card(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div className="card">
        <img className="card__photo" src={props.image}/>
        <p className="card__text">{props.sign}</p>
      </div>
    </a>
  )
}

export default Card;