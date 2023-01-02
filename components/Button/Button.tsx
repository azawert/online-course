import React, { FC, useState } from "react";
import styles from "./Button.module.scss";
import { IButtonProps } from "./Button.props";

import clsx from "clsx";
import ArrowIcon from "./ArrowIcon";
const Button: FC<IButtonProps> = ({
  children,
  isPrimary,
  className,
  isArrow = false,
  arrowDirection,
  ...rest
}) => {
  return (
    <button
      className={clsx({
        [String(className)]: true,
        [styles.button]: true,
        [styles.primary]: isPrimary,
        [styles.ghost]: !isPrimary,
      })}
      {...rest}
    >
      {children}
      {isArrow && (
        <span
          className={clsx({
            [styles.arrow]: isArrow,
            [styles.bottom]: arrowDirection === "bottom",
            [styles.right]: arrowDirection === "right",
          })}
        >
          {<ArrowIcon />}
        </span>
      )}
    </button>
  );
};

export default Button;
