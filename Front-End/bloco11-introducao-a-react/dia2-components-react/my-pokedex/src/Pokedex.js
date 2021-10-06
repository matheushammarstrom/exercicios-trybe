import React from "react";
import pokemons from "./data";
import PokemonCard from "./PokemonCard";

class Pokedex extends React.Component {
  render() { 
    return (<div>
      {pokemons.map(el => {
        return <PokemonCard pokemon={el} />
      })}
    </div>)
  }
}
 
export default Pokedex;