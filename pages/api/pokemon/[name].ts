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
    pokemon.abilities.map(async (ability: any) => {
      const abilityData = await fetch(ability.ability.url)
        .then((d) => d.json())
        .then((d) => d);
      abilities.push({
        name: abilityData.name,
        effect: abilityData.effect_changes,
      });
    })
  );

  const pokemonData = {
    name: pokemon.name,
    width: pokemon.width,
    height: pokemon.height,
    picture: pokemon.sprites.front_default,
    abilities,
  };
  
  res.status(200).json({
    pokemonData,
  });
};

export default controller;