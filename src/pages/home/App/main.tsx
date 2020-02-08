import React from "react";
import styles from "./styles.module.scss";
import { Level0, Level1 } from "../../../components/tabbable-navigation";
import Switch from "../../../components/Switch/Switch";

const Main = () => {
  return (
    <Level0 tabIndex={2} className={styles.main}>
      <Level1
        tabIndex={0}
        className={styles.m}
        component={"textarea"}
        defaultValue={
          "See how easy it is to navigate... \n\nUse tab, shift+tab, ctrl+j, ctrl+k, arrows, esc and enter. \n\nFor more scroll down."
        }
      ></Level1>
      <div>
        <Level1
          tabIndex={1}
          className={styles.ms}
          component={"select"}
          preventDefault={false}
        >
          <option value="mercedes" tabIndex={0}>
            Mercedes
          </option>
          <option value="volvo" tabIndex={1}>
            Volvo
          </option>
          <option value="saab" tabIndex={2}>
            Saab
          </option>
          <option value="audi" tabIndex={3}>
            Audi
          </option>
        </Level1>
        <Level1
          tabIndex={2}
          component={Switch}
          preventDefault={false}
          stopPropagation={false}
          // className={styles.m}
        ></Level1>
      </div>
      <Level1
        tabIndex={3}
        className={styles.m}
        component={"input"}
        placeholder={"Search, press /"}
      ></Level1>
    </Level0>
  );
};

export default Main;
