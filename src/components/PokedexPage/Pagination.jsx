import"../../pages/PokedexPage.css"
const Pagination = ({ cardsPerPage, totalCards, paginate, currentPage }) => {
  const pageNumbers = [];
  const maxButtonsToShow = 6;

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  let startPage = 1;
  let endPage = Math.min(startPage + maxButtonsToShow - 1, pageNumbers.length);

  if (currentPage > Math.floor(maxButtonsToShow / 2)) {
    startPage = currentPage - Math.floor(maxButtonsToShow / 2);
    endPage = startPage + maxButtonsToShow - 1;

    if (endPage > pageNumbers.length) {
      endPage = pageNumbers.length;
      startPage = endPage - maxButtonsToShow + 1;
    }
  }

  return (
    <ul className="pagination">
      <li className="pagination__item">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination__button"
        >
          <img className="arrow" src="/images/arrowI.png" alt="icono" />
        </button>
      </li>
      {pageNumbers.slice(startPage - 1, endPage).map((number) => (
        <li key={number} className="pagination__item">
          <button
            onClick={() => paginate(number)}
            className={`pagination__button ${currentPage === number ? 'active' : 'disabled'}`}
          >
            {number}
          </button>
        </li>
      ))}
      <li className="pagination__item">
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(totalCards / cardsPerPage)}
          className="pagination__button"
        >
          <img className="arrow" src="./images/arrowD.png" alt="icono" />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;