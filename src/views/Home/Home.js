import "./Home.css";
import { Card } from "../../components";
import { characters, starships, planets } from "../../assets/images";
import { useEffect, useContext } from "react";
import { Context } from "../../store/context";
import { starwarsintro } from "../../assets/music";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.setAmbientMusic(starwarsintro);

    return () => {
      actions.setAmbientMusic(null);
    };
  }, []);
  return (
    <>
      <Card cardSpan="characters" cardImg={characters} url="/characters" />
      <Card cardSpan="starships" cardImg={starships} url="/starships" />
      <Card cardSpan="planets" cardImg={planets} url="/planets" />
    </>
  );
};
