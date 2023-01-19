import { Inter } from "@next/font/google";
import Link from "next/link";
import Button from "./../components/Button/Button";
import PokemonMainList from "../components/pokemon/PokemonMainList/PokemonMainList";
import { GetServerSidePropsContext } from "next/types";
import FilterScreen from "../components/FilterScreen/FilterScreen";

const inter = Inter({ subsets: ["latin"] });

const Home = (props: any) => {
  return (
    <>
      <main>
        <h1>Cool Pokedex</h1>
        <FilterScreen active={true}/>

        {/* <Link href="/pokemon/pikachu">Pikachu</Link>
        <Button as="a" buttonType="outlined">
          awsdasdasd
        </Button> */}
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
