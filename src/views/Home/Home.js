import "./Home.css";
import { Card } from "../../components";
import { characters, starships, planets } from "../../assets/images";

export const Home = () => {
  return (
    <>
      <Card cardSpan="characters" cardImg={characters} />
      <Card cardSpan="starships" cardImg={starships} />
      <Card cardSpan="planets" cardImg={planets} />
    </>
  );
};
