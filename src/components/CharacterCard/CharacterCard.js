import "./CharacterCard.css";

export const CharacterCard = (props) => {
  return (
    <div className="chr-card-main-container foreground">
      <img
        src={props.chrCardImg}
        alt={props.chrCardImgAlt}
        className="chr-card-img"
      ></img>
      <span className="chr-card-span">{props.chrCardSpan}</span>
    </div>
  );
};
