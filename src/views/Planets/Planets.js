import { useEffect, useContext } from "react";
import { Context } from "../../store/context";
import { planetsMusic } from "../../assets/music";
import { Link } from "react-router-dom";

export const Planets = (props) => {
  const { actions } = useContext(Context);

  useEffect(() => {
    actions.setAmbientMusic(planetsMusic);

    return () => {
      actions.setAmbientMusic(null);
    };
  }, []);
  return (
    <div className="foreground">
      <h1>Planets</h1>
      <Link to="/home" className="foreground">
        <button>volver</button>
      </Link>
    </div>
  );
};
