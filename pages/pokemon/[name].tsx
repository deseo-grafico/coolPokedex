import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'

type PokemonProps = {
  pokemon: any;
};

const Pokemon = (props: PokemonProps) => {
  const router = useRouter()
  const { name } = router.query

  return (
    <>
      <Link href="/">Vuelve a Home</Link>
      <p>Pokemon: {name}</p>
      <div>{JSON.stringify(props.pokemon)}</div>
    </>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const params = context.params;

  const pokemon = await fetch(process.env.HOST + "/api/pokemon/" + params!.name)
    .then((d) => d.json())
    .then((d) => d);
  return {
    props: {
      pokemon,
    },
  };
};

export default Pokemon;