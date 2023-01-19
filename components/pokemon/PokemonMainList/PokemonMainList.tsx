import { Box, Grid } from "@mantine/core";
import React from "react";

const PokemonMainList = ({ pokemon }: any) => {
  return (
    <Grid className="hola" gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
      {pokemon.pokemon.map((pokemonItem: any, i: number) => (
        <Grid.Col span={4} md={6} lg={3} key={i} >
          <Box bg="indigo">
            <h4>{pokemonItem.name}</h4>
            <img src={pokemonItem.picture} />
          </Box>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default PokemonMainList;
