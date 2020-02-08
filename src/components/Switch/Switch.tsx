import React, { RefObject, Ref } from "react";
import styles from "./styles.module.scss";
import { WithLevel } from "../../handlers";

const Switch = React.forwardRef((props: {}, ref: Ref<WithLevel<HTMLDivElement>>) => {
  const clickHandle = (e: any) => {
    if (e.keyCode === 13) {
      const input = e.target.querySelector("input");
      input.checked = !input.checked;
    }
  };

  return (
    <div ref={ref} className={styles.container} {...props} onKeyDown={clickHandle}>
      Switch
      <br />
      <br />
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
});

export default Switch;
