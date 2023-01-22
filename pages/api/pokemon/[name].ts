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


  /**
   * 
   ** Problemas con las promesas:
   ** Tal y como está la PokáApi para poder indicar el type del pokemon hay que recorrer el array como pasa con las abilities,
   ** sin embargo, al meter 2 argumentos en en Promise.all da error...
   ** ... he probado con diferentes tipos: Promise.allSettled, etc... y nada...
   ** ... también he probado a hacer los bucles fuera de la promesa y luego llamarlos dentro de la promesa en un array y nada...
   *
  **/
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

    // type (ABANDONADO)
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
    pictureFemale: pokemon.sprites.front_female,
    abilities,
    species: pokemon.species.url,
  };
  
  res.status(200).json({
    pokemonData,
  });
};

export default controller;