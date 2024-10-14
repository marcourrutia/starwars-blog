import "./Home.css";
import { Card } from "../../components";
import {
  characters,
  starships,
  planets,
  darthVaderPng,
  milenumFalcon,
  tatooine,
} from "../../assets/images";
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
    <div className={`home-container ${store.homeVisible ? "visible" : ""}`}>
      <Card
        cardSpan="characters"
        cardImg={characters}
        cardImgPng={darthVaderPng}
        url="/characters"
      />
      <Card
        cardSpan="starships"
        cardImg={starships}
        cardImgPng={milenumFalcon}
        url="/starships"
      />
      <Card
        cardSpan="planets"
        cardImg={planets}
        cardImgPng={tatooine}
        url="/planets"
      />
    </div>
  );
};
