import { useNavigate } from "react-router-dom";
import "./Card.css";

export const Card = (props) => {
  const navigation = useNavigate();

  return (
    <div
      className="card-container foreground"
      onClick={() => {
        navigation(props.url);
      }}
    >
      <img
        className="card-img"
        src={props.cardImg}
        alt={props.cardAltImg}
      ></img>
      <img
        className="card-img-png"
        src={props.cardImgPng}
        alt={props.cardAltImg}
      ></img>
      <span className="card-span">{props.cardSpan}</span>
    </div>
  );
};
