import React from "react";

const PokemonMainList = ({ pokemon }: any) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {pokemon.pokemon.map((pokemonItem: any, i: number) => (
        <article key={i} className="bg-gray-100">
          <h4>{pokemonItem.name}</h4>
          <img src={pokemonItem.picture} />
        </article>
      ))}
    </div>
  );
};

export default PokemonMainList;
