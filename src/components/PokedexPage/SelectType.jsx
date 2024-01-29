import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import "../../pages/PokedexPage.css"


const SelectType = ({ setTypeSelected }) => {
  const url = "https://pokeapi.co/api/v2/type";
  const [types, getTypes] = useFetch(url);

  useEffect(() => {
    getTypes();
  }, []);

  const handleChange = (e) => {
    setTypeSelected(e.target.value);
  };

  return (
    <>
      <select className="trainer__select-type" onChange={handleChange}>
        <option value="allPokemons">All Pokemons</option>
        {types?.results.map((typeInfo) => (
          <option key={typeInfo.url} value={typeInfo.url}>
            {typeInfo.name}
          </option>
        ))}
      </select>
    </>
    
  );
};

export default SelectType;
