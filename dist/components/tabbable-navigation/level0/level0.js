import React, { useRef, useEffect } from "react";
import { levelBelowMove, levelsMove } from "../../../handlers";

const Level0 = ({
  component,
  preventDefault,
  callback,
  stopPropagation,
  children,
  ...otherProps
}) => {
  const ref = useRef(null);
  const handlerProps = {
    preventDefault,
    callback,
    stopPropagation
  };

  const handler = e => {
    // ctrl+j
    if (!e.shiftKey && e.ctrlKey && e.keyCode === 74) {
      levelBelowMove(e, +1, handlerProps);
      return;
    } // ctrl+k


    if (!e.shiftKey && e.ctrlKey && e.keyCode === 75) {
      levelBelowMove(e, -1, handlerProps);
      return;
    } // enter / ctrl+l


    if (e.keyCode === 13 && !e.ctrlKey || !e.shiftKey && e.ctrlKey && e.keyCode === 76) {
      levelsMove(e, +1, handlerProps);
      return;
    } // esc / ctrl+h


    if (e.keyCode === 27 || !e.shiftKey && e.ctrlKey && e.keyCode === 72) {
      levelsMove(e, -1, handlerProps);
      return;
    }
  };

  useEffect(() => {
    const app = ref.current;

    if (app) {
      app.focus();
      app.addEventListener("keydown", handler);
    }

    return () => {
      app?.removeEventListener("keydown", handler);
    };
  }, []);
  let c = component ? component : "div";
  return React.createElement(c, {
    ref,
    'data-level': 0,
    ...otherProps
  }, children);
};

export default Level0;
//# sourceMappingURL=level0.js.map