import "./Characters.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/context";
import { useFetch, useImageLoader } from "../../services";
import { duelOfTheFates } from "../../assets/music";
import { BackBtn, CharacterCard, Loading } from "../../components";

export const Characters = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { actions } = useContext(Context);

  const { data, loading } = useFetch(
    `https://www.swapi.tech/api/people?page=${currentPage}&limit=15`
  );

  useEffect(() => {
    actions.setAmbientMusic(duelOfTheFates);
  }, []);

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
        {loading ? (
          <Loading />
        ) : (
          data.results?.map((item, index) => (
            <CharacterCard
              key={index}
              chrCardImg={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
              chrCardSpan={item.name}
            />
          ))
        )}
      </div>
    </div>
  );
};
