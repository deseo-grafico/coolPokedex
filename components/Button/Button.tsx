import classNames from "classnames";
import { MouseEventHandler } from "react";
import { stringToIcon } from '../../utils/stringToIcon';
import styles from "./Button.module.sass";


type ButtonType = "filled" | "outlined" | "raw" | "rounded"
type ButtonState = "default" | "disable"
type ButtonAs = "a" | "button" | "span" | "div"
type ButtonSize = "large" | "base" | "small"
type ButtonProps = {
  icon?: string, 
  buttonType?: ButtonType,
  buttonState?: ButtonState,
  clickHandler?: MouseEventHandler<HTMLElement>,
  children?: JSX.Element | string, 
  as?: ButtonAs, 
  href?: string,
  buttonSize?: ButtonSize,
}


const Button = ({ as, children, clickHandler, buttonType, buttonState, icon, buttonSize }: ButtonProps) => {
  const Component = as || "button";
  const buttonClasses = classNames(styles.button, {
    [`${styles.buttonFilled}`]: buttonType == "filled",
    [`${styles.buttonOutlined}`]: buttonType == "outlined",
    [`${styles.buttonRaw}`]: buttonType == "raw",
    [`${styles.buttonRounded}`]: buttonType == "rounded",
    [`${styles.buttonLarge}`]: buttonSize == "large",
    [`${styles.disable}`]: buttonState == "disable",
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
