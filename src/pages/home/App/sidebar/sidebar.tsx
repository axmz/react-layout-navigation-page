import React from "react";
import styles from "./styles.module.scss";
import { Level0 } from "../../../../components/tabbable-navigation";
import { ReactComponent as Html5Svg } from "../../assets/html5-brands.svg";
import Menu from "./menu";

const Sidebar = () => {
  return (
    <Level0 tabIndex={0} className={styles.sidebar}>
      <div className={styles.skip}>
        <Html5Svg />
        <span>skipped</span>
      </div>
      <Menu/>
    </Level0>
  );
};

export default Sidebar;
