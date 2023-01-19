import { NextApiResponse } from "next";
import { NextApiRequest } from "next";

type Pokemon = {
  name: string;
  url: string;
};

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

      pokemonResponse.push({
        ...pokemonSingle,
        picture: pokemonFetched.sprites.front_default,
      });
    })
  );
//ORDENAR POKEMON POR ORDEN ALFABÉTICO
  pokemonResponse.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));
  res.status(200).json({ pokemon: pokemonResponse });
};

export default controller;
