import { useNavigate } from "react-router-dom";
import imgNotFound from "../../assets/images/img-not-found.webp";
import "./ItemCard.css";

export const ItemCard = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/item-details/${props.chrId}`);
  };

  return (
    <div className="chr-card-main-container foreground" onClick={handleClick}>
      <img
        src={props.chrCardImg}
        alt={props.chrCardImgAlt}
        className="chr-card-img"
        onError={(e) => (e.target.src = imgNotFound)}
      ></img>
      <span className="chr-card-span">{props.chrCardSpan}</span>
    </div>
  );
};
