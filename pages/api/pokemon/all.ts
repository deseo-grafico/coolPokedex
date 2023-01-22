import { NextApiResponse } from "next";
import { NextApiRequest } from "next";

type Pokemon = {
  name: string;
  url: string;
};

const PokemonTypes:Array<string>=[
  "normal",
  "fire",
  "water",
  "grass",
  "electric", "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dark",
  "dragon",
  "steel",
  "fairy"

]

const controller = async (req: NextApiRequest, res: NextApiResponse) => {
  const page: number = +req.query.page! || 1;
  const limit = 30;
  const offset = limit * page - limit;
  const pokemonResponse: any[] = [];
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  )
    .then((d) => d.json())
    .then((d) => d);

  await Promise.all(
    pokemon.results.map(async (pokemonSingle: Pokemon) => {
      const pokemonFetched = await fetch(pokemonSingle.url)
        .then((d) => d.json())
        .then((d) => d);
      const typesDeciffer: {slot:number, type:any}[] = pokemonFetched.types
      // const FinalTypes: {name:string, url:string}[]=typesDeciffer

      pokemonResponse.push({
        ...pokemonSingle,
        id: pokemonFetched.id,
        picture: pokemonFetched.sprites.front_default,
        types: typesDeciffer.map((t)=>{return t.type.name}),
      });
    })
  );
//ORDENAR POKEMON POR ORDEN ALFABÉTICO
  // pokemonResponse.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));

//ORDENAR POKEMON POR ID
  pokemonResponse.sort((a, b) => a.id - b.id);

//Filtrar los pokemon por cada tipo: nos retorna un array 
// que por cada tipo solo incluye los pokemon de la respuesta que incluyan dicho tipo 
const typeFiltered=PokemonTypes.map((type)=>{
  return pokemonResponse.filter(pokemon=>pokemon.types.includes(type))
})
//Filtrar los pokemon por tipo planta
// const pokemonGrass=pokemonResponse.filter(pokemon=>pokemon.types.includes("grass"))

  res.status(200).json({ pokemon: pokemonResponse });
};

export default controller;
