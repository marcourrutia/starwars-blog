import "./Characters.css";
import { Suspense, useContext, useEffect } from "react";
import { Context } from "../../store/context";
import { duelOfTheFates } from "../../assets/music";
import { BackBtn, CharacterCard } from "../../components";
import { fetchData } from "../../fetchData";

const apiData = fetchData("https://www.swapi.tech/api/people?page=1&limit=15");

export const Characters = () => {
  const data = apiData.read();
  const { actions } = useContext(Context);

  useEffect(() => {
    actions.setAmbientMusic(duelOfTheFates);
  });

  return (
    <div className="chr-container">
      <div className="chr-container-header">
        <BackBtn />
        <div className="chr-btn-container">
          <button className="chr-btn-page foreground">1</button>
          <button className="chr-btn-next">next</button>
        </div>
      </div>
      <div className="chr-cards-container">
        <Suspense>
          {data.results?.map((item, index) => (
            <CharacterCard
              key={index}
              chrCardImg={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
              chrCardSpan={item.name}
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
};
