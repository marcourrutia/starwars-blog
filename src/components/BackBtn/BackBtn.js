import { useNavigate, useLocation } from "react-router-dom";
import "./BackBtn.css";

export const BackBtn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackNavigation = () => {
    if (location.pathname.startsWith("/item-details")) {
      navigate("/item-list");
    } else if (location.pathname === "/item-list") {
      navigate("/home");
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      className="btn-global-back foreground"
      onClick={handleBackNavigation}
    >
      BACK
    </button>
  );
};
