import React from "react";
import './PokemonCard.css'

class PokemonCard extends React.Component {
  render() { 
    return (<div className='card'>
      <p>{this.props.pokemon.name}</p>
      <p>{this.props.pokemon.type}</p>
      <p>{this.props.pokemon.averageWeight.value}</p>
      <img src={this.props.pokemon.image}/>
      </div>);
  }
}
 
export default PokemonCard;