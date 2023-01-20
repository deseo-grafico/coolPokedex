import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../../components/Button/Button";
import PokemonSingleStyles from "./pokemonSingle.module.sass";

type PokemonProps = {
  pokemon: any;
};

const Pokemon = (props: PokemonProps) => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <div className={PokemonSingleStyles.backHome}>
        <Link href="/">Home</Link>
        {/* <Button as="span" buttonType="raw" icon="HomeIcon">
          <Link href="/"></Link>
        </Button> */}
      </div>

      {/* <p>Pokemon: {name}</p>
      <div>{JSON.stringify(props.pokemon)}</div>
      {console.log(props.pokemon)} */}

      <div className={PokemonSingleStyles.pokemonContainer}>
        <div className={PokemonSingleStyles.topContent}>
          <div className={PokemonSingleStyles.picture}>
            <img
              src={props.pokemon.pokemonData.picture}
              alt="Pokemon picture"
            />
          </div>
          <div className={PokemonSingleStyles.pokemonCtas}>
            <div className={PokemonSingleStyles.shinify}>
              <span>Shinify</span>
              <Button
                as="a"
                buttonType="outlined"
                icon="PlusIcon"
                children={""}
              />
            </div>

            <div className={PokemonSingleStyles.evolve}>
              <span>Evolve</span>
              <Button
                as="a"
                buttonType="outlined"
                icon="PlusIcon"
                children={""}
              />
            </div>

            <div className={PokemonSingleStyles.swapGender}>
              <span>Swap Gender</span>
              <Button
                as="a"
                buttonType="outlined"
                icon="PlusIcon"
                children={""}
              />
            </div>
          </div>
        </div>

        <div className={PokemonSingleStyles.middleContent}>
          <div className={PokemonSingleStyles.pokemonName}>
            {props.pokemon.pokemonData.name}
          </div>
        </div>

        <div className={PokemonSingleStyles.bottomContent}>
          <div className={PokemonSingleStyles.mainInfoContainer}>
            <div className={PokemonSingleStyles.weight}>
              <div className={PokemonSingleStyles.title}>Weight</div>
              <span>{props.pokemon.pokemonData.height} m</span>
            </div>
            <div className={PokemonSingleStyles.gender}>
              <div className={PokemonSingleStyles.title}>Gender</div>
              <span>Gender</span>
            </div>
            <div className={PokemonSingleStyles.height}>
              <div className={PokemonSingleStyles.title}>Height</div>
              <span>{props.pokemon.pokemonData.weight} kg</span>
            </div>
          </div>

          <div className={PokemonSingleStyles.abilitiesContainer}>
            <div className={PokemonSingleStyles.title}>Abilities</div>
            <div className={PokemonSingleStyles.abilitiesContent}>
              {props.pokemon.pokemonData.abilities.map(
                (pokemonAbilities: any, i: number) => (
                  <Chip key={i}>
                    {pokemonAbilities.name}
                  </Chip>
                )
              )}
            </div>
          </div>

          <div className={PokemonSingleStyles.descriptionContainer}>
            <div className={PokemonSingleStyles.title}>Description</div>
            <div className={PokemonSingleStyles.descriptionContent}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              aperiam voluptatem dicta illo officia, maiores expedita debitis
              aliquam modi culpa odit quibusdam veniam alias ex error ipsam rem
              aspernatur pariatur.
            </div>
          </div>

          <div className={PokemonSingleStyles.evolutionContainer}>
            <div className={PokemonSingleStyles.title}>Evolution</div>
            <div className={PokemonSingleStyles.evolutionContent}>
              <img src="#" alt="Pokemon evolution" />
              <Button
                as="span"
                buttonType="raw"
                icon="ArrowRightIcon"
                children={""}
              />
              <img src="#" alt="Pokemon evolution" />
              <Button
                as="span"
                buttonType="raw"
                icon="ArrowRightIcon"
                children={""}
              />
              <img src="#" alt="Pokemon evolution" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
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
