import "./StartButton.css";
import useSound from "use-sound";

export const StartButton = (props) => {
  const [on] = useSound(props.lSOn);
  const [off] = useSound(props.lSOff);
  const [active, { stop }] = useSound(props.lSActive);
  const [hit] = useSound(props.lSHit);

  const handleMouseEnter = () => {
    on();
    active();
  };

  const handleMouseLeave = () => {
    off();
    stop();
  };

  function handleClick() {
    props.setVelocity(0.04);
    setTimeout(() => {
      props.setVelocity(0.0004);
    }, 1000);
    stop();
    hit();
    if (props.value) {
      setTimeout(() => {
        props.setValue(!props.value);
      }, 400);
    }
  }

  return (
    <div className="start-btn-container">
      <button
        className="start-btn"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        enter
      </button>
    </div>
  );
};
