import { Box } from "@mantine/core";
import { useState, MouseEventHandler } from "react";
import classNames from "classnames";

import { stringToIcon } from '../../utils/stringToIcon';
import styles from "./Filter.module.sass";

// type PokemonType = "normal" | "fire"| "water"| "grass"| "electric" | "ice" | "fighting" | "poison" | "ground" | "flying" | "psychic"| "bug" | "rock" | "ghost"| "dark" | "dragon"| "steel"| "fairy"

type FilterProps = {
  icon: string, 
  filterType?: string,
  filterLabel: string,
  // filterActive: boolean, 
  clickHandler?: MouseEventHandler<HTMLElement>,
}

const Filter = ({ filterType, filterLabel, icon, clickHandler }: FilterProps) => {
  let [isFilterSingleActive, setIsFilterSingleActive]=useState(false);

  const toggleActive = () => {
    setIsFilterSingleActive(!isFilterSingleActive);
    console.log("filtro activado");
    clickHandler
    
  };
  
  const FilterClasses = classNames(styles.filter, {
    [`${styles.active}`]: isFilterSingleActive == true,
    [`${styles.inactive}`]: isFilterSingleActive == false,
    // [`${styles.filterType}`]: filterType == "type",
  });
  const Icon= stringToIcon(icon)
  return (
    <><Box className="justify-center flex flex-col items-center">
      <div className={FilterClasses} onClick={toggleActive}>
        {icon && <span className="icon">{<Icon height={18} />}</span>}
      </div>
      <div className="filterLabel text-center text-sm">{filterLabel}</div>
      
    </Box>
      
    </>
  );
};

export default Filter;
