import React from "react";
import styles from "./styles.module.scss";

const Info = () => {
  return (<div className={styles.body}>
    <h1>Why?</h1>
    <p>
      React-layout-navigation is meant to simplify keyboard navigation on the page.
    </p>
    <h1>How?</h1>
    <p>
      Tabbable elements of the page are identified and wrapped with the corresponding React-layout-navigation Level.
      </p>
    <p>
      Done. Use the shortcuts as in the example above.
    </p>
    <h1>More</h1>
    <a href="https://github.com/axmz/react-layout-navigation">github</a>
  </div>);
};

export default Info;
