import classNames from "classnames";
import { MouseEventHandler } from "react";
import { stringToIcon } from '../../utils/stringToIcon';
import styles from "./Button.module.sass";


type ButtonType = "filled" | "outlined" | "raw" | "rounded"
type ButtonAs = "a" | "button" | "span" 
type ButtonProps = {
  icon?: string, 
  buttonType?: ButtonType, 
  clickHandler?: MouseEventHandler<HTMLElement>,
  children: JSX.Element | string, 
  as?: ButtonAs, 
  href?: string
}


const Button = ({ as, children, clickHandler, buttonType, icon }: ButtonProps) => {
  const Component = as || "button";
  const buttonClasses = classNames(styles.button, {
    [`${styles.buttonFilled}`]: buttonType == "filled",
    [`${styles.buttonOutlined}`]: buttonType == "outlined",
    [`${styles.buttonRaw}`]: buttonType == "raw",
    [`${styles.buttonRounded}`]: buttonType == "rounded",
  });
  const Icon= stringToIcon(icon)
  return (
    <>
      <Component className={buttonClasses} onClick={clickHandler}>
        {icon && <span className="icon">{<Icon height={18} />}</span>}
        <span>{children}</span>
      </Component>
    </>
  );
};

export default Button;
