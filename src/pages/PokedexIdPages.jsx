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
      return "#4CAF50bb";
    } else if (statValue >= 80) {
      return "#4646e7bb";
    } else if (statValue >= 60) {
      return "#FFC107bb";
    } else {
      return "#F44336bb";
    }
  }

  return (
    <article className="poke-card">
      <header className="poke-card__header-images">
        <img
          className="poke-card__img-R"
          src="/images/rectangulo.red.png"
          alt="imagen-header"
        />
        <img
          className="poke-card__img-B"
          src="/images/rectangulo.black.png"
          alt="imagen-header"
        />
        <img
          className="poke-card__img-1"
          src="/images/circulo1.png"
          alt="imagen-header"
        />
        <img
          className="poke-card__img-2"
          src="./images/circulo2.png"
          alt="imagen-header"
        />
        <img
          className="poke-card__img-T"
          src="/images/titleCard.png"
          alt="imagen-header"
        />
      </header>
      <section className="poke-card__header-into">
        <div className={`Card-Pokemon-into ${firstType}-border1 ${firstType}-color1`}>
          <div className={`poke-card__header1 ${firstType}-gradient1 `}>
            <img
              className="poke-card__official-artwork"
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </div>
          <article className="poke-card__info">
            <h2 className="poke-card__id">#{pokemon?.id}</h2>
            <h3 className="poke-card__name">{pokemon?.name}</h3>
            <ul className="poke-card__details">
              <li className="poke-card__detail">
                <span className="title-poke-span">Altura </span> <span className="poke-span-contain">{pokemon?.height}</span>
              </li>
              <li className="poke-card__detail">
                <span className="title-poke-span">Peso </span> <span className="poke-span-contain">{pokemon?.weight}</span>
              </li>
            </ul>
            <div className="poke-card__type_abilities">
            <div className="container-poke-list">
            <h3 className="poke-card__types-title">Type</h3>
            <ul className="poke-card__types">
              {pokemon?.types.map((typeInfo) => (
                <li key={typeInfo.type.url} className="poke-card__type">
                  <span>{typeInfo.type.name}</span>
                </li>
              ))}
            </ul>
            </div>
            <div className="container-poke-list">
            <h3 className="poke-card__abilities-title">Abilities</h3>
            <ul className="poke-card__abilities">
              {pokemon?.abilities.map((abilitiesInfo) => (
                <li
                  key={abilitiesInfo.ability.url}
                  className="poke-card__ability"
                >
                  <span>{abilitiesInfo.ability.name}</span>
                </li>
              ))}
            </ul>
            </div>
            </div>
            <ul className="poke-card__stats">
              {pokemon?.stats.map((statInfo) => (
                <li className="poke-card__stat" key={statInfo.stat.url}>
                  <span className={`poke-card__stat-name ${firstType}-color1`}>
                    {statInfo.stat.name}
                  </span>
                  <div className="poke-card__stat-bar">
                    <div
                      className="poke-card__stat-fill"
                      style={{
                        width: `${(statInfo.base_stat / 252) * 100}%`,
                        backgroundColor: getStatColor(statInfo.base_stat),
                        borderTopLeftRadius: '24px', borderBottomLeftRadius: '24px', outline: '1px solid rgba(0, 0, 0, 0.4)'
                      }}
                    ><p className="poke-card__stat-base">{statInfo.base_stat}</p></div>
                    <div className="container-stats_poke">
                    <p className="poke-card__stat-max">252</p>
                    </div>
                  </div>
                  
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
      <section className="poke-card__moves">
        <div className={`container__movements ${firstType}-border1`}>
        <h3 className={`poke-card__moves-title ${firstType}-color1`}>Movements</h3>
        <div className="poke-card__move-list">
          {pokemon?.moves.map((moveInfo) => (
            <div key={moveInfo.move.url} className={`poke-card__move ${firstType}-color1`}>
              {moveInfo.move.name}
            </div>
          ))}
        </div>
        </div>
        
      </section>
    </article>
  );
};

export default PokedexIdPages;
