import { useParams } from "react-router-dom";

import { useEffect } from "react";
import "./pokedexidPages.css";
import useFetch from "../hooks/useFetch";

const PokedexIdPages = () => {
  const { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const [pokemon, getPokemon] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [id]);
  const firstType = pokemon?.types[0].type.name;
  function getStatColor(statValue) {
    if (statValue >= 100) {
      return "#4CAF50"; // Verde si el valor es mayor o igual a 100
    } else if (statValue >= 50) {
      return "#FFC107"; // Amarillo si el valor está entre 50 y 99
    } else {
      return "#F44336"; // Rojo si el valor es menor de 50
    }
  }

  return (
    <article className="pokemon-card">
      <div className="pokemon-card__header-images">
      <img className="pokemon-card__header-image" src="/images/header.png" alt="" />
      <img className="pokemon-card__header-image1" src="images/titleCard.png" alt="" />
    </div>
  <header className="pokemon-card__header">
    <div className={`pokemon-card__header1 ${firstType}-gradient`}>
    <img
      className="pokemon-card__official-artwork"
      src={pokemon?.sprites.other["official-artwork"].front_default}
      alt=""
    />
    </div>
    
  </header>
  <section className="pokemon-card__info">
    <h2 className="pokemon-card__id">#{pokemon?.id}</h2>
    <h3 className="pokemon-card__name">{pokemon?.name}</h3>
    <ul className="pokemon-card__details">
      <li className="pokemon-card__detail"><span>Altura </span> <span>{pokemon?.height}</span></li>
      <li className="pokemon-card__detail"><span>Peso </span> <span>{pokemon?.weight}</span></li>
    </ul>
    <h3 className="pokemon-card__types-title">Type</h3>
    
    <ul className="pokemon-card__types">
      {pokemon?.types.map((typeInfo) => (
        <li key={typeInfo.type.url} className="pokemon-card__type"><span>{typeInfo.type.name}</span></li>
      ))}
    </ul>
    <h3 className="pokemon-card__abilities-title">Abilities</h3>
    <ul className="pokemon-card__abilities">
      {pokemon?.abilities.map((abilitiesInfo) => (
        <li key={abilitiesInfo.ability.url} className="pokemon-card__ability">
          <span>{abilitiesInfo.ability.name}</span>
        </li>
      ))}
    </ul>
    <ul className="pokemon-card__stats">
  {pokemon?.stats.map((statInfo) => (
    <li className="pokemon-card__stat" key={statInfo.stat.url}>
      <span className="pokemon-card__stat-name">{statInfo.stat.name}</span>
      <div className="pokemon-card__stat-bar">
        <div
          className="pokemon-card__stat-fill"
          style={{
            width: `${(statInfo.base_stat / 150) * 100}%`,
            backgroundColor: getStatColor(statInfo.base_stat),
          }}
        >
          {statInfo.base_stat}
        </div>
      </div>
      <span className="pokemon-card__stat-max">150</span>
    </li>
  ))}
</ul>

  </section>
  <section className="pokemon-card__moves">
    <h3 className="pokemon-card__moves-title">Movements</h3>
    <div className="pokemon-card__move-list">
      {pokemon?.moves.map((moveInfo) => (
        <span key={moveInfo.move.url} className="pokemon-card__move">
          {moveInfo.move.name}
        </span>
      ))}
    </div>
  </section>
</article>

  );
};

export default PokedexIdPages;
