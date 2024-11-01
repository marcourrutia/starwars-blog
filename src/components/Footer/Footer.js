import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import useSound from "use-sound";
import { useContext } from "react";
import { Context } from "../../store/context";

export const Footer = (props) => {
  const { store } = useContext(Context);
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

  function handleClick(url) {
    stop();
    hit();
    window.open(url, "_blank");
  }

  return (
    <footer
      className={`main-footer ${store.homeVisible ? "footer-visible" : ""}`}
    >
      <div className="foreground">
        <span>Follow me...</span>
        <div className="footer-icons">
          <FaLinkedin
            className="footer-click"
            onClick={() =>
              handleClick(
                "https://www.linkedin.com/in/marco-urrutia-438b42288/"
              )
            }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <FaGithubSquare
            className="footer-click"
            onClick={() => handleClick("https://github.com/marcourrutia")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <FaSquareXTwitter
            className="footer-click"
            onClick={() => handleClick("https://x.com/punk_ron")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </footer>
  );
};
