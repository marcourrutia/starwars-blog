import "./ItemList.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/context";
import { useFetch } from "../../services";
import { BackBtn, ItemCard, Loading, Pagination } from "../../components";

export const ItemList = () => {
  const { store, actions } = useContext(Context);
  const { currentPage } = store;
  const [totalPages, setTotalPages] = useState(0);

  const { data, loading } = useFetch(
    `https://starwars-databank-server.vercel.app/api/v1/${store.url}?page=${currentPage}&limit=20`
  );

  useEffect(() => {
    if (store.loadMusic) {
      actions.setAmbientMusic(store.loadMusic);
    }
  }, [store.loadMusic]);

  useEffect(() => {
    if (!loading && data) {
      const roundedPages = Math.ceil(data.info.total / 20);
      setTotalPages(roundedPages);
    }
  }, [loading, data]);

  const handlePageChange = (page) => {
    actions.setCurrentPage(page);
  };

  return (
    <div className="chr-container">
      <div className="chr-container-header">
        <BackBtn />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={handlePageChange}
        />
      </div>
      <div className="chr-cards-container">
        {loading ? (
          <Loading />
        ) : (
          data?.data.map((item, index) => (
            <ItemCard
              key={index}
              chrCardImg={item.image}
              chrCardSpan={item.name}
              chrId={item._id}
            />
          ))
        )}
      </div>
    </div>
  );
};
