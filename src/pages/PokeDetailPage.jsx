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

  /*
console.log(name)
 
  console.log(pokemon?.abilities.length)
  
   //*{pokemon?.types[1].type.name}*/
 

  return (
    <div className="header__pokedet">
      <header>
        <img className="home__img" src="public/pokedex.png" alt="" srcset="" />
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
                <span className="type__desc">
                  {pokemon?.types[1].type.name}
                </span>
              </div>
            </section>
            <section className="poke__type__desc">
              <h2>Habilidades</h2>
              <div className="type__poke">
                <span className="type__desc">
                  {pokemon?.abilities[0].ability.name}
                </span>
                <span className="type__desc">
                  {pokemon?.abilities[1].ability.name}
                </span>
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
              <div className="progress__bar">
                <div className="progress__stats"></div>
              </div>
            </section>
            <section>
              <div className="stats__title">
                <h2>Ataque</h2>
                <span>{pokemon?.stats[1].base_stat}/150</span>
              </div>
              <div className="progress__bar">
                <div className="progress__stats"></div>
              </div>
            </section>
            <section>
              <div className="stats__title">
                <h2>Defensa</h2>
                <span>{pokemon?.stats[2].base_stat}/150</span>
              </div>
              <div className="progress__bar">
                <div className="progress__stats"></div>
              </div>
            </section>
            <section>
              <div className="stats__title">
                <h2>Velocidad</h2>
                <span>{pokemon?.stats[5].base_stat}/150</span>
              </div>
              <div className="progress__bar">
                <div className="progress__stats"></div>
              </div>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PokeDetailPage;