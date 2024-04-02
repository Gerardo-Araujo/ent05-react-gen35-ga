import PokeCard from "./PokeCard"


const ListPokemons = ({pokemons}) => {



  
  return (
    
    <div className="listpokemon">
        {
            pokemons?.map(pokeInfo => (
                <PokeCard 
                key={pokeInfo.url}
                pokeInfo={pokeInfo}
                />
            ))
        }
    </div>
  )
}

export default ListPokemons