import { RangeSlider } from "@mantine/core";
import React, { useContext } from "react";
import { IndexContext } from "../../contexts/indexContext";
import Button from "../Button/Button";
import Filter from "../Filter/Filter";

const FilterScreen = ({ props }: any) => {
  let { toggleFilter } = useContext(IndexContext)!;

  return (
    <>
      <Button
        buttonType="raw"
        icon="XMarkIcon"
        clickHandler={toggleFilter}
      ></Button>
      <h1>FilterScreen</h1>
      <div className="filtroSlider">
        <h2>Generación</h2>
        <RangeSlider
          color="grape"
          size="lg"
          radius="xl"
          // labelAlwaysOn
          marks={[
            { value: 100 / 8, label: "1" },
            { value: 200 / 8, label: "2" },
            { value: 300 / 8, label: "3" },
            { value: 50, label: "4" },
            { value: 500 / 8, label: "5" },
            { value: 600 / 8, label: "6" },
            { value: 700 / 8, label: "7" },
            { value: 100, label: "8" },
          ]}
        />
      </div>
      <div className="filtroTipos">
        <h2>Tipos</h2>
        
        <Filter filterActive={false} clickHandler={toggleFilter} filterType={"normal"} icon={'XMarkIcon'}/>
      </div>
      <div className="filtroGender">
        <h2>Tipos</h2>
      </div>
      <div className="filtroGender">
        <h2>Tipos</h2>
      </div>
    </>
  );
};

export default FilterScreen;
