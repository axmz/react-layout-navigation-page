import React from "react";
import styles from "./styles.module.scss";

const Switch = (props: {}) => {
  const clickHandle = (e: any) => {
    if (e.keyCode === 13) {
      const input = e.currentTarget.querySelector('input')
      input.checked = !input.checked;
    }
  };

  return (
    <div className={styles.container} {...props} onKeyDown={clickHandle}>
      Switch
      <br />
      <br />
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};

export default Switch;
