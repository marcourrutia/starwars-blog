import { useContext } from "react";
import { Context } from "../../store/context";
import { useNavigate } from "react-router-dom";
import "./FavButton.css";
import { GoTrash } from "react-icons/go";

export const FavButton = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const characters = store.favorites.filter((fav) => fav.category === "characters");
  const starships = store.favorites.filter(
    (fav) => fav.category === "vehicles"
  );
  const planets = store.favorites.filter((fav) => fav.category === "locations");

  const handleItemClick = (uid, url, itemImg) => {
    actions.setUrl(url);
    actions.setItemImg(itemImg);
    actions.setCurrentPage(1);
    navigate(`/item-details/${uid}`);
  };

  const handleFavoriteClick = (uid, category) => {
    actions.toggleFavorite({
      uid: uid,
      category: category,
    });
  };

  return (
    <>
      <button
        className="btn btn-outline-warning foreground"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
        id="btn-fav"
      >
        FAVORITES
      </button>

      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h6 className="offcanvas-title" id="offcanvasScrollingLabel">
            Favorites List
          </h6>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="fav-characters">
            <span className="fav-category-span">Characters</span>
            <ul className="fav-list">
              {characters.length > 0 ? (
                characters.map((fav) => (
                  <div className="fav-list-item-container">
                    <li
                      key={fav.uid}
                      className="fav-list-item"
                      onClick={() =>
                        handleItemClick(fav.uid, "characters", "characters")
                      }
                    >
                      {fav.name}
                    </li>
                    <GoTrash
                      className="fav-trash"
                      onClick={() => handleFavoriteClick(fav.uid, "characters")}
                    />
                  </div>
                ))
              ) : (
                <p>No characters added</p>
              )}
            </ul>
          </div>
          <div className="fav-vehicles">
            <span className="fav-category-span">vehicles</span>
            <ul className="fav-list">
              {starships.length > 0 ? (
                starships.map((fav) => (
                  <div className="fav-list-item-container">
                    <li
                      key={fav.uid}
                      className="fav-list-item"
                      onClick={() =>
                        handleItemClick(fav.uid, "vehicles", "vehicles")
                      }
                    >
                      {fav.name}
                    </li>
                    <GoTrash
                      className="fav-trash"
                      onClick={() => handleFavoriteClick(fav.uid, "vehicles")}
                    />
                  </div>
                ))
              ) : (
                <p>No vehicles added</p>
              )}
            </ul>
          </div>
          <div className="fav-planets">
            <span className="fav-category-span">locations</span>
            <ul className="fav-list">
              {planets.length > 0 ? (
                planets.map((fav) => (
                  <div className="fav-list-item-container">
                    <li
                      key={fav.uid}
                      className="fav-list-item"
                      onClick={() =>
                        handleItemClick(fav.uid, "locations", "locations")
                      }
                    >
                      {fav.name}
                    </li>
                    <GoTrash
                      className="fav-trash"
                      onClick={() => handleFavoriteClick(fav.uid, "locations")}
                    />
                  </div>
                ))
              ) : (
                <p>No locations added</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
