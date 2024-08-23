import "./Characters.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/context";
import { useFetch } from "../../services";
import { duelOfTheFates } from "../../assets/music";
import { BackBtn, CharacterCard, Loading, Pagination } from "../../components";

export const Characters = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { actions } = useContext(Context);

  const { data, loading } = useFetch(
    `https://www.swapi.tech/api/people?page=${currentPage}&limit=10`
  );

  useEffect(() => {
    actions.setAmbientMusic(duelOfTheFates);
  }, []);

  useEffect(() => {
    if (!loading && data) {
      setTotalPages(data.total_pages);
    }
  }, [loading, data]);
  console.log(currentPage);

  return (
    <div className="chr-container">
      <div className="chr-container-header">
        <BackBtn />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className="chr-cards-container">
        {loading ? (
          <Loading />
        ) : (
          data?.results.map((item, index) => (
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
