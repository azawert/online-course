import React from "react";
import { IParagraphProps } from "./Paragraph.props";
import clsx from "clsx";
import styles from "./Paragraph.module.scss";
const Paragraph = ({
  children,
  fontSize = "16px",
  className,
  ...rest
}: IParagraphProps): JSX.Element => {
  return (
    <p
      className={clsx(className, {
        [styles.small]: fontSize === "14px",
        [styles.medium]: fontSize === "16px",
        [styles.large]: fontSize === "18px",
      })}
    >
      {children}
    </p>
  );
};

export default Paragraph;
