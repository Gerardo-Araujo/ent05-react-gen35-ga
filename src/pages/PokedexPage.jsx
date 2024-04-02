import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import ListPokemons from "../components/Pokedexpage/ListPokemons";
import SelectType from "../components/Pokedexpage/SelectType";
/*import Pagination from "../components/Pagination"; */
import "../components/Pokedexpage/style/Pagination.css";

const PokedexPage = () => {
  const [pokeSearch, setPokeSearch] = useState("");
  const [typeSelected, setTypeSelected] = useState("allPokemons");
  /* const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20); */
  const inputSearch = useRef();

  const trainer = useSelector((states) => states.trainer);
  
  const url =
    `https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`;
  const [pokemons, getPokemons, getPokeByType] = useFetch(url);

  //console.log(pokemons);

  useEffect(() => {
    if (typeSelected === "allPokemons") {
      getPokemons();
    } else {
      getPokeByType(typeSelected);
    } //setLimit( limit = 10);
  }, [typeSelected]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setPokeSearch(inputSearch.current.value.trim().toLowerCase());
  };

  const pokemonsFiltered = pokemons?.results.filter((poke) => {
    return poke.name.includes(pokeSearch);
  });

  return (
    <div className="pokedex__header">
      <img className="home__img" src="public/pokedex.png" alt="" srcset="" />

      <p className="title__header">
        Bienvenido <span>{trainer}</span>, aqui podras encontrar tu Pokemon
        favorito
      </p>
      <div className="selecttype">
        <form onSubmit={handleSubmit}>
          <input ref={inputSearch} type="text" />
          <button>BUSCAR</button>
         {/*<div className="btn__pag">
            <button onClick={setOffset( offset - 1)}>Pag.Ant </button>
            <p> { offset} </p>
            <button  onClick={setOffset( offset + 1)}>Pag.Sig</button>
          </div>  */} 
        </form>
        
        <SelectType setTypeSelected={setTypeSelected} />
      </div>

      <ListPokemons pokemons={pokemonsFiltered} />
    </div>
  );
};

export default PokedexPage;
