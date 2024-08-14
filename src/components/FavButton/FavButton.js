import "./FavButton.css";

export const FavButton = (props) => {
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
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h6 className="offcanvas-title" id="offcanvasScrollingLabel">
            favorites list
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
            <span className="fav-category-span">characters</span>
            <ul className="fav-list">
              <li className="fav-list-item">a</li>
              <li className="fav-list-item">a</li>
              <li className="fav-list-item">a</li>
            </ul>
          </div>
          <div className="fav-vehicles">
            <span className="fav-category-span">vehicles</span>
          </div>
          <div className="fav-planets">
            <span className="fav-category-span">planets</span>
          </div>
        </div>
      </div>
    </>
  );
};
