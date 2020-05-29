import React from "react";
import styles from "./styles.module.scss";
import { clickCallBack } from "../../../utils/click-simulator";
import { Level0, Level1 } from "react-layout-navigation";
import { ReactComponent as HomeSvg } from "../../../assets/home-solid.svg";
import { ReactComponent as LockSvg } from "../../../assets/lock-solid.svg";
import { ReactComponent as CogsSvg } from "../../../assets/cogs-solid.svg";

const Footer = () => {
  return (
    <Level0 tabIndex={3} className={styles.footer}>
      <Level1 tabIndex={0} className={styles.f} callback={clickCallBack}>
        <HomeSvg />
      </Level1>
      <Level1 tabIndex={1} className={styles.f} callback={clickCallBack}>
        <LockSvg />
      </Level1>
      <Level1 tabIndex={2} className={styles.f} callback={clickCallBack}>
        <CogsSvg />
      </Level1>
    </Level0>
  );
};

export default Footer;
