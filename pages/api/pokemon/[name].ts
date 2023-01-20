import { NextApiResponse } from "next";
import { NextApiRequest } from "next";

const controller = async (req: NextApiRequest, res: NextApiResponse) => {
  const pokemonName = req.query.name;
  const abilities: any[] = [];
  

  const pokemon = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + pokemonName
  )
    .then((d) => d.json())
    .then((d) => d);

  await Promise.all(
    //abilities
    pokemon.abilities.map(async (ability: any) => {
      const abilityData = await fetch(ability.ability.url)
        .then((d) => d.json())
        .then((d) => d);
      abilities.push({
        name: abilityData.name,
        effect: abilityData.effect_changes,
      });
    }),

    // type
    // pokemon.types.map(async (type: any) => {
    //   const typeData = await fetch(type.type.url)
    //     .then((d) => d.json())
    //     .then((d) => d);
    //   types.push({
    //     name: typeData.name,
    //   });
    // }),
  );

  const pokemonData = {
    name: pokemon.name,
    weight: pokemon.weight,
    height: pokemon.height,
    picture: pokemon.sprites.front_default,
    pictureShiny: pokemon.sprites.front_shiny,
    abilities,
    // types,
  };
  
  res.status(200).json({
    pokemonData,
  });
};

export default controller;