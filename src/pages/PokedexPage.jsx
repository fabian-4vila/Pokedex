import { useSelector } from "react-redux";
import useFetch from "../hooks/UseFetch";
import { useEffect, useRef, useState } from "react";
import PokeCard from "../components/PokedexPage/PokeCard";
import SelectType from "../components/PokedexPage/SelectType";
import "./PokedexPage.css";
const PokedexPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [typeSelected, setTypeSelected] = useState("allPokemons");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage, setPokemonPerPage] = useState(10);
  const trainer = useSelector((store) => store.trainer);
  const inputSearch = useRef();
  const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=150`;
  const [pokemons, getPokemons, getTypePokemon] = useFetch(url);
  useEffect(() => {
    if (typeSelected === "allPokemons") {
      getPokemons();
    } else {
      getTypePokemon(typeSelected);
    }
  }, [typeSelected]);
  const handleSearch = (e) => {
    e.preventDefault();
    setInputValue(inputSearch.current.value.trim().toLowerCase());
  };
  const pokeFiltered = pokemons?.results.filter((poke) =>
    poke.name.includes(inputValue)
  );
  const totalPokemonCount = pokeFiltered?.length;
  const totalPages = Math.ceil(totalPokemonCount / pokemonPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handlePerPageChange = (e) => {
    const newPerPage = parseInt(e.target.value, 10);
    setPokemonPerPage(newPerPage);
    setCurrentPage(1);
  };
  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = pokeFiltered?.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );
  const arrow1 = ">"
  const arrow2 = "<"
  return (
    <div className="trainer">
      <header className="trainer__header">
      <div className="trainer__images_title">
        <img className="trainer__images_header1" src="/images/header.png" alt="" />
        <img className="trainer__images_header5" src="/images/titleCard.png" alt="" />
      </div>
        <p className="trainer__greeting">welcome {trainer}, <span className="trainer__greeting_1">here you can find your favorite pokemon</span></p>
        <form className="trainer__search-form" onSubmit={handleSearch}>
          <input className="trainer__input" ref={inputSearch} type="text" />
          <button className="trainer__button">Search</button>
          
          <SelectType
          setTypeSelected={setTypeSelected}
        />
         <select
            className="trainer__pagination-select"
            onChange={handlePerPageChange}
            value={pokemonPerPage}
          >
            <option value={10}>10 per page</option>
            <option value={20}>20 per page</option>
            <option value={30}>30 per page</option>
          </select>
        </form>
        
      </header>

      <div className="trainer__pokemon-list">
        {currentPokemon?.map((poke) => (
          <PokeCard key={poke.url} url={poke.url} />
        ))}
      </div>
      <footer className="trainer__footer">
          <div className="trainer__pagination">
          <button
            className="trainer__pagination-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {arrow2}
          </button>
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`trainer__pagination-button ${
                currentPage === pageNumber ? "active" : ""
              }`}
            >
              {pageNumber}
            </button>
          ))}
          <button
            className="trainer__pagination-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {arrow1}
          </button>
          </div>
      </footer>
    </div>
  );
};

export default PokedexPage;
