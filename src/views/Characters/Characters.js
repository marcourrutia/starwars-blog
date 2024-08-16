import "./Characters.css";
import { Suspense, useContext, useEffect, useState } from "react";
import { Context } from "../../store/context";
import { duelOfTheFates } from "../../assets/music";
import { BackBtn, CharacterCard, Loading } from "../../components";
import { fetchData, loadImages } from "../../services";
import { error } from "jquery";

const apiData = fetchData(`https://www.swapi.tech/api/people?page=1&limit=15`);

export const Characters = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);
  const { actions } = useContext(Context);

  const data = apiData.read();

  useEffect(() => {
    actions.setAmbientMusic(duelOfTheFates);
  }, []);

  useEffect(() => {
    loadImages(
      data.results,
      "https://starwars-visualguide.com/assets/img/characters/"
    )
      .then((urls) => {
        setImageUrls(urls);
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error("Error al cargar las imágenes:", error);
      });
  }, [data.results]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="chr-container">
        <div className="chr-container-header">
          <BackBtn />
          <div className="chr-btn-container">
            <button className="chr-btn-page foreground">1</button>
            <button className="chr-btn-next">next</button>
          </div>
        </div>
        <div className="chr-cards-container">
          {imagesLoaded ? (
            data.results?.map((item, index) => (
              <CharacterCard
                key={index}
                chrCardImg={imageUrls[index]}
                chrCardSpan={item.name}
              />
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </Suspense>
  );
};
