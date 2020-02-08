import React  from "react";
import styles from  "./styles.module.scss";

const Switch = () => {
  return (
    <div className={styles.container}>
      Switch
      <br />
      <br />
      <label className={ styles.switch }>
        <input type="checkbox"/>
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};

export default Switch;
