import { NextApiResponse } from "next";
import { NextApiRequest } from "next";

const controller = async (req: NextApiRequest, res: NextApiResponse) => {
  const pokemonName = req.query.name;
  const texts: any[] = [];
  

  const pokemon = await fetch(
    "https://pokeapi.co/api/v2/pokemon-species/" + pokemonName
  )
    .then((d) => d.json())
    .then((d) => d);

  // await Promise.all(
  //   pokemon.flavor_text_entries.map(async (text: any) => {
  //     const textData = await fetch(text.flavor_text)
  //       .then((d) => d.json())
  //       .then((d) => d);
  //     texts.push({
  //       text: textData,
  //     });
  //   }),
  // );

  const pokemonSpecieData = {
    texts,
  };
  
  res.status(200).json({
    pokemonSpecieData,
  });
};

export default controller;