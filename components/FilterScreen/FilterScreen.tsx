import { RangeSlider } from "@mantine/core";
import { Box, Grid } from "@mantine/core";
import React, { useContext, useState } from "react";
import { IndexContext } from "../../contexts/indexContext";
import Button from "../Button/Button";
import Filter from "../Filter/Filter";
// const PokemonTypes:Array<string>=[
//   "normal",
//   "fire",
//   "water",
//   "grass",
//   "electric", "ice",
//   "fighting",
//   "poison",
//   "ground",
//   "flying",
//   "psychic",
//   "bug",
//   "rock",
//   "ghost",
//   "dark",
//   "dragon",
//   "steel",
//   "fairy"

// ]

const FilterScreen = ({ props }: any) => {
  let { toggleFilter } = useContext(IndexContext)!;

  const [endValue, setEndValue] = useState([0, 100 / 8]);

  const PokemonTypes: Array<string> = [
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "ice",
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
    "fairy",
  ];

  const MARKS: { value: number; label: string }[] = [
    
    { value: 100 / 8, label: "1" },
    { value: 200 / 8, label: "2" },
    { value: 300 / 8, label: "3" },
    { value: 50, label: "4" },
    { value: 500 / 8, label: "5" },
    { value: 600 / 8, label: "6" },
    { value: 700 / 8, label: "7" },
    { value: 100, label: "8" },
  ];

  return (
    <>
      <Button
        buttonType="raw"
        icon="XMarkIcon"
        clickHandler={toggleFilter}
      ></Button>
      <h1>FilterScreen</h1>
      <div className="filtroSlider py-4">
        <h2>Generación</h2>
        <RangeSlider
          color="grape"
          size="lg"
          radius="xl"
          label={null}
          defaultValue={[0, 100 / 8]}
          step={100 / 8}
          marks={MARKS}
          onChangeEnd={setEndValue}
        />
      </div>
      <div className="filtroTipos py-4">
        <h2>Tipos</h2>
        <Grid className="hola" justify="center" columns={9}>
          {PokemonTypes.map((type: string, i: number) => (
            <Grid.Col span={3} md={1} key={i}>
              <Filter filterType={type} filterLabel={type} icon={"XMarkIcon"} />
            </Grid.Col>
          ))}
        </Grid>
      </div>
      <div className="flex justify-between py-4">
        <div className="filtroGender">
          <h2>Género</h2>
          <div className="flex gap-2">
            <Filter filterLabel={"male"} icon={"XMarkIcon"} />
            <Filter filterLabel={"female"} icon={"XMarkIcon"} />
          </div>
        </div>
        <div className="filtroGender">
          <h2>Legendaries</h2>
          <Filter filterLabel={"legendaries"} icon={"XMarkIcon"} />
        </div>
      </div>
      <Button buttonType="outlined">Reset Filters</Button>
    </>
  );
};

export default FilterScreen;
