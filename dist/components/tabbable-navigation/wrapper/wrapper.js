import React, { useEffect, useRef } from "react";
import { baseLevelMove } from "../../../handlers";

const Wrapper = ({
  component,
  children,
  preventDefault,
  stopPropagation,
  callback,
  ...otherProps
}) => {
  const ref = useRef(null);
  const props = {
    preventDefault,
    callback,
    stopPropagation
  };

  const handler = e => {
    // tab
    if (e.keyCode === 9 && e.shiftKey) {
      baseLevelMove(e, -1, props);
      return;
    } // shift+tab


    if (e.keyCode === 9 && !e.shiftKey) {
      baseLevelMove(e, +1, props);
      return;
    } // ctrl+j DO NOTHING


    if (!e.shiftKey && e.ctrlKey && e.keyCode === 74) {
      e.preventDefault();
      return;
    } // ctrl+k DO NOTHING


    if (!e.shiftKey && e.ctrlKey && e.keyCode === 75) {
      e.preventDefault();
      return;
    } // ctrl+h DO NOTHING


    if (!e.shiftKey && e.ctrlKey && e.keyCode === 72) {
      e.preventDefault();
      return;
    } // ctrl+l DO NOTHING


    if (!e.shiftKey && e.ctrlKey && e.keyCode === 76) {
      e.preventDefault();
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
  return React.createElement(component = "div", {
    ref,
    "data-level": -1,
    ...otherProps
  }, children);
};

export default Wrapper;
//# sourceMappingURL=wrapper.js.map