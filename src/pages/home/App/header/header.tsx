import React from "react";
import styles from "./styles.module.scss";
import { clickCallBack } from "../../utils/click-simulator";
import { Level0, Level1 } from "react-layout-navigation";
import { ReactComponent as Archive } from "../../assets/archive-solid.svg";
import { ReactComponent as Chart } from "../../assets/chart-line-solid.svg";
import { ReactComponent as Diagram } from "../../assets/project-diagram-solid.svg";
import { ReactComponent as Table } from "../../assets/table-solid.svg";

const Header = () => {
  return (
    <Level0 tabIndex={1} className={styles.header}>
      <Level1 tabIndex={0} className={styles.hdr} callback={clickCallBack}>
        <Chart />
      </Level1>
      <Level1 tabIndex={1} className={styles.hdr} callback={clickCallBack}>
        <Diagram />
      </Level1>
      <Level1 tabIndex={2} className={styles.hdr} callback={clickCallBack}>
        <Table />
      </Level1>
      <Level1 tabIndex={3} className={styles.hdr} callback={clickCallBack}>
        <Archive />
      </Level1>
    </Level0>
  );
};

export default Header;
