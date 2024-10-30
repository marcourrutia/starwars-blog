import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../store/context";
import "./Card.css";

export const Card = (props) => {
  const navigation = useNavigate();
  const { actions } = useContext(Context);

  return (
    <div
      className="card-container foreground"
      onClick={() => {
        navigation("/item-list");
        actions.setLoadMusic(props.loadMusic);
        actions.setUrl(props.url);
        actions.setItemImg(props.itemImg);
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
