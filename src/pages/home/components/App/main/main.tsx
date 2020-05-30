import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Level0, Level1 } from "react-layout-navigation";
import Switch from "../../Switch/Switch";
import Logger from "../../Logger/LoggerContainer";

const Main = () => {
  const [cls, setCls] = useState(styles.main);
  const [fullscreen, toggleFullscreen] = useState(false);
  const handleClick = (e: any) => {
    console.log("key", e);
    if (!fullscreen && e.keyCode === 70) {
      setCls(`${styles.main} ${styles.fullscreen}`);
    }
    if (fullscreen && e.keyCode === 70) {
      setCls(`${styles.main}`);
    }
    toggleFullscreen(!fullscreen);
  };

  return (
    <Level0 tabIndex={2} className={cls} onKeyDown={handleClick}>
      <Level1
        tabIndex={0}
        className={styles.m}
        component={"textarea"}
        defaultValue={
          "See how easy it is to navigate...\n\nUse:\n\n - Tab, Shift+Tab\n - <C-hjkl>\n - Enter, Esc\n\nFor more scroll down."
        }
      ></Level1>
      <div>
        <Level1
          tabIndex={1}
          className={styles.m}
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
        <div className={styles.fullscreenInfo}>
          F - for fullscreen
        </div>
        {/* <Logger></Logger> */}
      </div>
      <Level1
        id="search"
        tabIndex={3}
        className={styles.m}
        component={"input"}
        placeholder={"Search, press /"}
      ></Level1>
    </Level0>
  );
};

export default Main;
