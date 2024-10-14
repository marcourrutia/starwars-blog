import "./Pagination.css";

export const Pagination = ({ totalPages, setCurrentPage, currentPage }) => {
  const getVisiblePages = () => {
    const maxPagesToShow = 3;
    let startPage = Math.max(currentPage - 1, 1);
    let endPage = Math.min(currentPage + 1, totalPages);

    if (currentPage === 1) {
      endPage = Math.min(3, totalPages);
    } else if (currentPage === totalPages) {
      startPage = Math.max(totalPages - 2, 1);
    }

    const visiblePages = [];
    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }
    return visiblePages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="pgn-btn-container foreground">
      {currentPage > 1 && (
        <button
          className="pgn-btn prev"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          🡨
        </button>
      )}
      {visiblePages[0] > 1 && <span className="pgn-dot">. . .</span>}
      {visiblePages.map((num) => (
        <button
          className={`pgn-btn ${currentPage === num ? "is-current" : ""}`}
          key={num}
          onClick={() => setCurrentPage(num)}
        >
          {num}
        </button>
      ))}
      {visiblePages[visiblePages.length - 1] < totalPages && (
        <span className="pgn-dot">. . .</span>
      )}
      {currentPage < totalPages && (
        <button
          className="pgn-btn next"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          🡪
        </button>
      )}
    </div>
  );
};
