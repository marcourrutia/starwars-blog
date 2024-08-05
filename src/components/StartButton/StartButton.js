import "./StartButton.css";

export const StartButton = (props) => {
  function handleClick() {
    if (props.value) {
      props.setValue(!props.value);
    }
  }

  return (
    <div className="start-btn-container">
      <button className="start-btn" onClick={handleClick}>
        enter
      </button>
    </div>
  );
};
