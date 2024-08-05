import "./Card.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img className="card-img" src={props.cardImg}></img>
      <span className="card-span">{props.cardSpan}</span>
    </div>
  );
};
