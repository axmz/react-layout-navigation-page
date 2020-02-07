import React, { useRef, useEffect } from "react";
import { WithLevel, Props, moveBtwLevels, sameLevelMove } from "../../../handlers";

const LevelNext: React.FC<Props> = ({
  component,
  children,
  ...otherProps
}) => {
  const ref = useRef<WithLevel>(null);
  const handler = (e: KeyboardEvent) => {
    // ctrl+j
    if (!e.shiftKey && e.ctrlKey && e.keyCode === 74) {
      sameLevelMove(e, +1, ref)
      return
    }
    // ctrl+k
    if (!e.shiftKey && e.ctrlKey && e.keyCode === 75) {
      sameLevelMove(e, -1, ref)
      return
    }
    // enter
    if (e.keyCode === 13 && !e.ctrlKey) {
      moveBtwLevels(e, +1)
      return
    }
    // esc
    if (e.keyCode === 27) {
      moveBtwLevels(e, -1)
      return
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

  let c = component ? component : "div" 
  return React.createElement(
    c,
    {
      ref,
      'data-level': 2,
      ...otherProps
    },
    children
  );
};

export default LevelNext;
