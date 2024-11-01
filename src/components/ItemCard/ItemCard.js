import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/context";
import imgNotFound from "../../assets/images/img-not-found.webp";
import "./ItemCard.css";
import { IoHeartCircleOutline } from "react-icons/io5";

export const ItemCard = (props) => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();

  const isFavorite = store.favorites.some(
    (fav) => fav.uid === props.chrId && fav.category === store.url
  );

  const handleClick = () => {
    navigate(`/item-details/${props.chrId}`);
  };

  const handleFavoriteClick = () => {
    actions.toggleFavorite({
      name: props.chrCardSpan,
      uid: props.chrId,
      category: store.url,
    });
  };

  return (
    <div className="chr-card-main-container foreground">
      <img
        src={props.chrCardImg}
        alt={props.chrCardImgAlt}
        className="chr-card-img"
        onClick={handleClick}
        onError={(e) => (e.target.src = imgNotFound)}
      />
      <IoHeartCircleOutline
        className={isFavorite ? "favorite" : "chr-card-icon"}
        onClick={handleFavoriteClick}
      />
      <span className="chr-card-span" onClick={handleClick}>
        {props.chrCardSpan}
      </span>
    </div>
  );
};
