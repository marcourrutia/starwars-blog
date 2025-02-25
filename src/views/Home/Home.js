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
import {
  duelOfTheFates,
  starwarsintro,
  tatooineTheme,
  thePodRace,
} from "../../assets/music";

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
        url="characters"
        loadMusic={duelOfTheFates}
        itemImg="characters"
      />
      <Card
        cardSpan="vehicles"
        cardImg={starships}
        cardImgPng={milenumFalcon}
        url="vehicles"
        loadMusic={thePodRace}
        itemImg="vehicles"
      />
      <Card
        cardSpan="locations"
        cardImg={planets}
        cardImgPng={tatooine}
        url="locations"
        loadMusic={tatooineTheme}
        itemImg="locations"
      />
    </div>
  );
};
