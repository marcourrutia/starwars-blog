import "./Home.css";
import { Card } from "../../components";
import { characters, starships, planets } from "../../assets/images";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Link to={"/characters"}>
        <Card cardSpan="characters" cardImg={characters} />
      </Link>
      <Card cardSpan="starships" cardImg={starships} />
      <Card cardSpan="planets" cardImg={planets} />
    </>
  );
};
