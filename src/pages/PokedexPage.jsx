import { useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import Pagination from "../components/PokedexPage/Pagination"
import useFetch from "../hooks/useFetch"
import "./PokedexPage.css";





const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage, setCardsPerPage] = useState(10)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const trainer = useSelector(store => store.trainer)

  const inputSearch = useRef()

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1292'
  const [ pokemons, getPokemons, getTypePokemon] = useFetch(url)

  useEffect(() => {
    if (typeSelected === 'allPokemons') {
      getPokemons()
    } else {
      getTypePokemon(typeSelected) 
    }
  }, [typeSelected])

  const handleSearch = e => {
     e.preventDefault()
     setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))
  
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = pokeFiltered?.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    if (cardsPerPage > 0 ) {
      setCurrentPage(pageNumber)
      setHasError(false)
    } else {
      setHasError(true)
    }   
  }

  const handleCardsPerPageChange = (e) => {
    const newCardsPerPage = parseInt(e.target.value, 10)
    setIsLoading(true)
    if (!isNaN(newCardsPerPage) && newCardsPerPage > 0) {
      setCardsPerPage(newCardsPerPage)
    }else{
      setCardsPerPage(newCardsPerPage)
    }
    setIsLoading(false)
  }


  return (
    <>
    <div className="pokemon__Page">
    <header className="pokedex__header">
      <img className="pokedex__img" src="/images/rectangulo.red.png" alt="imagen-header" />
      <img className="pokedex__img2" src="/images/rectangulo.black.png" alt="imagen-header" />
      <img className="pokedex__img3" src="/images/circulo1.png" alt="imagen-header" />
      <img className="pokedex__img4" src="/images/circulo2.png" alt="imagen-header" />
      <img className="pokedex__img5" src="/images/titleCard.png" alt="imagen-header" />
    </header>
    <div className="pokedex__body">
      <p className="pokedex__title3"> <span>Wellcome trainer {trainer}</span>, here you can find your favorite Pokémon</p>
      <form className="pokedex__form" onSubmit={handleSearch}>
        <input className="pokedex__input2" ref={inputSearch} type="text" />
        <button className="pokedex__button2">Search</button>
      </form>
      <div className="pokedex__pages">
      <SelectType className="pokedex__filter" setTypeSelected={setTypeSelected} />
      <select
        className="pokedex__cards__select"
        id="cardsPerPage"
        value={cardsPerPage}
        onChange={handleCardsPerPageChange}
      >
      <option value={10}>{10}</option>
      <option value={20}>{20}</option>
      <option value={30}>{30}</option>
    </select>
      </div>
      {isLoading && <p className="pokedex__loading">Loading...</p>}
      <div className="pokecard__container">
        {currentCards?.map((poke) => (
          <PokeCard key={poke.url} url={poke.url} />
        ))}
      </div>
    </div>
    <footer className="pokedex__footer">
    <div>
        {pokeFiltered && pokeFiltered.length > 0 && cardsPerPage > 0 ? (
          <Pagination
            cardsPerPage={cardsPerPage}
            totalCards={pokeFiltered.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        ) : (
          <p className="pokedex__error">
           {hasError
             ? "The number of cards per page must be a valid value greater than 0"
             : "No items to display"
           }
          </p>
        )
        }
      </div>
    </footer>
    </div>
    </>
  )
}

export default PokedexPage