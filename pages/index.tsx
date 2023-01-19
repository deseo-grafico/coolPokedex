import { Inter } from "@next/font/google";
import Link from "next/link";
import Button from "./../components/Button/Button";
import PokemonMainList from "../components/pokemon/PokemonMainList/PokemonMainList";
import { GetServerSidePropsContext } from "next/types";
import FilterScreen from "../components/FilterScreen/FilterScreen";
import { useContext } from "react";
import { IndexContext } from "../contexts/indexContext";

const inter = Inter({ subsets: ["latin"] });

const Home = (props: any) => {
  let { isFiltersActive, toggleFilter } = useContext(IndexContext)!;
  return (
    <>
      <main>
        <h1>Cool Pokedex</h1>
        <Button as="a" buttonType="outlined" clickHandler={toggleFilter}>
          Filtrar
        </Button>
        {isFiltersActive?<FilterScreen active={true}/>:null}
        

        
        
      </main>

      <PokemonMainList pokemon={props.pokemon} />
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const pokemon = await fetch(process.env.HOST + "/api/pokemon/all")
    .then((d) => d.json())
    .then((d) => d);
  return {
    props: {
      pokemon,
    },
  };
};

export default Home;
