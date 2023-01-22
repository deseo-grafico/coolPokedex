import classNames from "classnames";
import { MouseEventHandler } from "react";
import { stringToIcon } from '../../utils/stringToIcon';
import styles from "./Filter.module.sass";

type PokemonType = "normal" | "fire"| "water"| "grass"| "electric" | "ice" | "fighting" | "poison" | "ground" | "flying" | "psychic"| "bug" | "rock" | "ghost"| "dark" | "dragon"| "steel"| "fairy"

type FilterProps = {
  icon: string, 
  filterType?: PokemonType,
  filterActive: boolean, 
  clickHandler?: MouseEventHandler<HTMLElement>,
}

const Filter = ({ clickHandler, filterType, filterActive, icon }: FilterProps) => {
  
  const FilterClasses = classNames(styles.filter, {
    [`${styles.active}`]: filterActive == true,
    [`${styles.inactive}`]: filterActive == false,
    //[`${styles.filterType}`]: filterType == "type",
  });
  const Icon= stringToIcon(icon)
  return (
    <>
      <div className={FilterClasses} onClick={clickHandler}>
        {icon && <span className="icon">{<Icon height={18} />}</span>}
      </div>
    </>
  );
};

export default Filter;
