import { Box, Grid } from "@mantine/core";
import Link from "next/link";
import React from "react";

type pokemonGridItem = {
  name: string;
  picture: string;
};

const PokemonMainList = ({ pokemon }: any) => {
  return (
    <Grid className="hola" gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
      {pokemon.pokemon.map((pokemonItem: any, i: number, pokemonName: any) => (
        <Grid.Col span={4} md={6} lg={3} key={i}>
          <Box>
            <Link
              href={`pokemon/` + pokemonItem.name}
            >
              {pokemonItem.name}
            </Link>
            <Link
              href={`pokemon/` + pokemonItem.name}
            >
              <img src={pokemonItem.picture} />
            </Link>
          </Box>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default PokemonMainList;
