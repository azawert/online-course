import clsx from "clsx";
import React from "react";
import { ITagProps } from "./Tag.props";
import styles from "./Tag.module.scss";
const Tag = ({
  children,
  color,
  href,
  size,
  className,
  ...rest
}: ITagProps): JSX.Element => {
  return (
    <div
      className={clsx(className, styles.tag, {
        [styles.green]: color === "green",
        [styles.primary]: color === "primary",
        [styles.red]: color === "red",
        [styles.grey]: color === "grey",
        [styles.white]: color === "white",
        [styles.m]: size === "m",
        [styles.s]: size === "s",
      })}
    >
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
};

export default Tag;
