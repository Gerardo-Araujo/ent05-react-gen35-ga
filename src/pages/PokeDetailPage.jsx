import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import "../components/Pokedexpage/style/PokeDetailPage.css/";

const PokeDetailPage = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokemon] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [name]);

  let type_arr;
  let  abilities_arr;
  if (pokemon?.types.length < 2) {
   /**  pokemon.types.push("");
    type_arr = pokemon?.types[0].type.name;
    console.log(type_arr);*/
    type_arr = "";
  } else {
     type_arr = pokemon?.types[1].type.name;
  }

  if (pokemon?.abilities.length < 2) {
    /* pokemon.abilities.push("");
    abilities_arr = pokemon?.abilities[0].type.name;
    console.log(abilities_arr);*/
    abilities_arr = "";
  } else {
    abilities_arr = pokemon?.abilities[1].ability.name;
  }

  const ProgressBar = ({ value, maxValue }) => {
    const progress = (value / maxValue) * 100;

    return (
      <div className="progress__bar">
        <div
          className="progress__stats"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="header__pokedet">
      <header>
        <img className="home__img" src="/pokedex.png" alt="" srcset="" />
      </header>
      <article className="pokedetail">
        <img
          className="pokedetail__img"
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
        <div className="detail__princ">
          <div className="bas__color"></div>
          <div>
            <section className="title">
              <h2># {pokemon?.id}</h2>
              <h1>{pokemon?.name}</h1>
            </section>
          </div>
          <div className="descr__detail">
            <section>
              <span>Peso</span>
              <h3>{pokemon?.weight}</h3>
            </section>
            <section>
              <span>Altura</span>
              <h3>{pokemon?.height}</h3>
            </section>
          </div>
          <div className="descr__detail2">
            <section className="poke__type__desc">
              <h2>Tipo</h2>
              <div className="type__poke">
                <span className="type__desc">
                  {pokemon?.types[0].type.name}
                </span>
                <span className="type__desc">{type_arr}</span>
              </div>
            </section>
            <section className="poke__type__desc">
              <h2>Habilidades</h2>
              <div className="type__poke">
                <span className="type__desc">
                  {pokemon?.abilities[0].ability.name}
                </span>
                <span className="type__desc">{abilities_arr}</span>
              </div>
            </section>
          </div>
          <div className="desc__stats">
            <h2 className="stats__titles">Slat</h2>
            <section className="stats__bord">
              <div className="stats__title">
                <h2>HP</h2>
                <span>{pokemon?.stats[0].base_stat}/150</span>
              </div>
              <ProgressBar value={pokemon?.stats[0].base_stat} maxValue={150} />
            </section>
            <section>
              <div className="stats__title">
                <h2>Ataque</h2>
                <div></div>
                <span>{pokemon?.stats[1].base_stat}/150</span>
              </div>
              <ProgressBar value={pokemon?.stats[1].base_stat} maxValue={150} />
            </section>
            <section>
              <div className="stats__title">
                <h2>Defensa</h2>
                <span>{pokemon?.stats[2].base_stat}/150</span>
              </div>
              <ProgressBar value={pokemon?.stats[2].base_stat} maxValue={150} />
            </section>
            <section>
              <div className="stats__title">
                <h2>Velocidad</h2>
                <span>{pokemon?.stats[5].base_stat}/150</span>
              </div>
              <ProgressBar value={pokemon?.stats[5].base_stat} maxValue={150} />
            </section>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PokeDetailPage;
