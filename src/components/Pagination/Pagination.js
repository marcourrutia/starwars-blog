import "./Pagination.css";

export const Pagination = ({ totalPages, setCurrentPage, currentPage }) => {
  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(i);
  }

  return (
    <div className="pgn-btn-container foreground">
      <button
        className="pgn-btn prev"
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previus
      </button>
      {pageButtons.map((num) => (
        <button
          className={`pgn-btn ${currentPage === num ? "is-current" : ""}`}
          key={num}
          onClick={() => setCurrentPage(num)}
        >
          {num}
        </button>
      ))}
      <button
        className="pgn-btn next"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};
