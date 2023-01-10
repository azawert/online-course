import React from "react";
import { IFooterProps } from "./Footer.props";
import styles from "./Footer.module.scss";
const Footer = ({ ...props }: IFooterProps): JSX.Element => {
  return (
    <div {...props} className={styles.wrapper}>
      <span className={styles.left_side}>
        OwlTop © 2020 - 2021 Все права защищены
      </span>
      <div className={styles.right_side}>
        <span>Пользовательское соглашение</span>
        <span>Политика конфиденциальности</span>
      </div>
    </div>
  );
};

export default Footer;
