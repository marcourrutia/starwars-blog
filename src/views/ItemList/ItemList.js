import "./ItemList.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/context";
import { useFetch } from "../../services";
import { BackBtn, ItemCard, Loading, Pagination } from "../../components";

export const ItemList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { store, actions } = useContext(Context);

  const { data, loading } = useFetch(
    `https://www.swapi.tech/api/${store.url}?page=${currentPage}&limit=10`
  );

  useEffect(() => {
    if (store.loadMusic) {
      actions.setAmbientMusic(store.loadMusic);
    }
  }, [store.loadMusic]);

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
            <ItemCard
              key={index}
              chrCardImg={`https://starwars-visualguide.com/assets/img/${store.itemImg}/${item.uid}.jpg`}
              chrCardSpan={item.name}
              chrId={item.uid}
            />
          ))
        )}
      </div>
    </div>
  );
};
