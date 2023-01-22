import { GetServerSidePropsContext } from "next";
import Button from "../../components/Button/Button";
import PokemonSingleStyles from "./pokemonSingle.module.sass";
import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Chip from "../../components/Chips/Chip";
import { pokemonSingleContext } from "../../contexts/pokemonSingleContext";
import { useContext } from "react";

type PokemonProps = {
  pokemon: any;
  specie: any;
};

const Pokemon = (props: PokemonProps) => {
  const { isShinyActive, buttonShiny, buttonSwapGender, isSwapGenderActive } =
    useContext(pokemonSingleContext)!;

  return (
    <div className={PokemonSingleStyles.pokemonContainer}>
      <div className={PokemonSingleStyles.topContent}>
        <div className={PokemonSingleStyles.picture}>
          {isShinyActive ? (
            <img
              src={props.pokemon.pokemonData.pictureShiny}
              alt="Pokemon Shiny picture"
            />
          ) : isSwapGenderActive ? (
            props.pokemon.pokemonData.pictureFemale == null ? (
              <img
                src={props.pokemon.pokemonData.picture}
                alt="Pokemon picture"
              />
            ) : (
              <img
                src={props.pokemon.pokemonData.pictureFemale}
                alt="Pokemon Female picture"
              />
            )
          ) : (
            <img
              src={props.pokemon.pokemonData.picture}
              alt="Pokemon picture"
            />
          )}
        </div>
        <div className={PokemonSingleStyles.pokemonCtas}>
          <div className={PokemonSingleStyles.shinify}>
            <span className={PokemonSingleStyles.title}>Shinify</span>
            <Button
              as="a"
              buttonType="outlined"
              icon="PlusIcon"
              buttonSize="large"
              children={""}
              clickHandler={buttonShiny}
            />
          </div>

          {/*
           **
           **** Pokemon Evolution descartada. Demasiado complejo
           **
           */}
          <div className={PokemonSingleStyles.evolve}>
            <span className={PokemonSingleStyles.title}>Evolve</span>
            <Button
              as="a"
              buttonType="outlined"
              icon="PlusIcon"
              buttonSize="large"
              buttonState="disable"
              children={""}
            />
          </div>

          <div className={PokemonSingleStyles.swapGender}>
            <span className={PokemonSingleStyles.title}>Swap Gender</span>
            {props.pokemon.pokemonData.pictureFemale == null ? (
              <Button
                as="a"
                buttonType="outlined"
                icon="PlusIcon"
                buttonSize="large"
                children={""}
                buttonState="disable"
              />
            ) : (
              <Button
                as="a"
                buttonType="outlined"
                icon="PlusIcon"
                buttonSize="large"
                children={""}
                clickHandler={buttonSwapGender}
              />
            )}
          </div>
        </div>
      </div>

      <div className={PokemonSingleStyles.middleContent}>
        <div className={PokemonSingleStyles.pokemonName}>
          {props.pokemon.pokemonData.name}
        </div>
      </div>

      <div className={PokemonSingleStyles.bottomContent}>
        {/*
         **
         **** Pokemon Evolution descartada. Demasiado complejo
         **
         */}
        <div className={PokemonSingleStyles.evolutionContainer}>
          <div className={PokemonSingleStyles.title}>Evolution</div>
          <div className={PokemonSingleStyles.evolutionContent}>
            <img
              src={props.pokemon.pokemonData.picture}
              alt="Pokemon evolution 1"
            />
            <ArrowRightIcon className="h-5 w-5 text-primary-400" />
            <XMarkIcon className="h-5 w-5 text-red-400" />
            {/* <img src="#" alt="Pokemon evolution 2" /> */}
            <ArrowRightIcon className="h-5 w-5 text-primary-400" />
            <XMarkIcon className="h-5 w-5 text-red-400" />
            {/* <img src="#" alt="Pokemon evolution 3" /> */}
          </div>
        </div>

        <div className={PokemonSingleStyles.mainInfoContainer}>
          <div className={PokemonSingleStyles.weight}>
            <div className={PokemonSingleStyles.title}>Weight</div>
            <span>{props.pokemon.pokemonData.height} m</span>
          </div>
          <div className={PokemonSingleStyles.gender}>
            <div className={PokemonSingleStyles.title}>Type</div>
            <div className="pokemonTypeContainer text-red-400 text-center">
              Pokemon Type
              {/*
               **
               **** Problemas con las promesas --> Ir a "api/pokemon/[name].ts" para ver los problemas.
               **
               */}
              {/* {props.pokemon.pokemonData.types.map(
                (pokemonTypes: any, i: number) => (
                  <span key={i}>{pokemonTypes.name}</span>
                )
              )} */}
            </div>
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
                <Chip key={i}>{pokemonAbilities.name}</Chip>
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
          <div className="text text-red-400 text-center">
            {props.pokemon.pokemonData.species} . flavor_text_entries .
            flavor_text
            {/*
             **
             **** Problemas diversos:
             **** 1. Error en la petición a la api "api/pokemon-specie/[name].ts",
             **** 2. Error en getServerSideProps. Al llamar a los datos de la ruta de arriba, lanza un error diciendo que solo se aceptan rutas absolutas.
             **
             */}
            {/* {props.specie.pokemonSpecieData.texts.flavor_text_entries.map(
            (texts: any, i: number) => (
              <Chip key={i}>{texts.flavor_text}</Chip>
            )
          )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const params = context.params;

  const pokemon = await fetch(process.env.HOST + "/api/pokemon/" + params!.name)
    .then((d) => d.json())
    .then((d) => d);

  const specie = await fetch(
    process.env.HOST + "/api/pokemon-species/" + params!.name
  )
    .then((d) => d.json())
    .then((d) => d);
  return {
    props: {
      pokemon,
      specie,
    },
  };
};

export default Pokemon;
