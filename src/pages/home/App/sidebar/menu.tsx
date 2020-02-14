import React from "react";
import styles from "./styles.module.scss";
import {
  Level1,
  LevelNext
} from "react-layout-navigation";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Level1 tabIndex={0} className={styles.line}>
        <span>
          <strong>Menu 1</strong>
        </span>
        <span>
          <strong>></strong>
        </span>
        <div className={styles.submenu}>
            <LevelNext stopPropagation={true} tabIndex={0} data-level={2} className={styles.line}>
              <span>
                <strong>Submenu 1</strong>
              </span>
              <span>
                <strong>></strong>
              </span>
              <div className={styles.submenu}>
                <LevelNext stopPropagation={true} tabIndex={0} data-level={3} className={styles.line}>
                  <strong>SubSubmenu 1</strong>
                </LevelNext>
                <LevelNext stopPropagation={true} tabIndex={1} data-level={3} className={styles.line}>
                  <strong>SubSubmenu 2</strong>
                </LevelNext>
                <LevelNext stopPropagation={true} tabIndex={2} data-level={3} className={styles.line}>
                  <strong>SubSubmenu 3</strong>
                </LevelNext>
              </div>
            </LevelNext>
          <LevelNext stopPropagation={true} tabIndex={1} data-level={2} className={styles.line}>
            <strong>Submenu 2</strong>
          </LevelNext>
        </div>
      </Level1>
      <Level1 tabIndex={1} className={styles.line}>
        <strong>Menu 2</strong>
      </Level1>
      <Level1 tabIndex={2} className={styles.line}>
        <strong>Menu 3</strong>
      </Level1>
      <Level1 tabIndex={3} className={styles.line}>
        <strong>Help</strong>
      </Level1>
    </div>
  );
};

export default Menu;
