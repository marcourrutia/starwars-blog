import { Link } from "react-router-dom";
import "./Characters.css";

export const Characters = () => {
  return (
    <div className="characters-container foreground">
      <h1 className="characters-h1">Holaaaaaaaaa</h1>
      <p>Lorem Impsum sadsdfdkslnldsnglndfkl</p>
      <Link to={"/home"}>
        <button>Volver</button>
      </Link>
    </div>
  );
};
