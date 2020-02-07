import React, { useEffect, useRef } from "react";
import { WithLevel, Props, baseLevelMove, levelBelowMove } from "../../../handlers";

const Wrapper: React.FC<Props> = ({
  component,
  children,
  ...otherProps
}) => {
  const ref = useRef<WithLevel<HTMLDivElement>>(null);

  const handler = (e: KeyboardEvent) => {
    // tab
    if (e.keyCode === 9 && e.shiftKey) {
      baseLevelMove(e, -1, ref)
      return
    }
    // shift+tab
    if (e.keyCode === 9 && !e.shiftKey ) {
      baseLevelMove(e, +1, ref)
      return
    }
    // ctrl+j DO NOTHING
    if (!e.shiftKey && e.ctrlKey && e.keyCode === 74) {
      e.preventDefault()
      return
    }
    // ctrl+k DO NOTHING
    if (!e.shiftKey && e.ctrlKey && e.keyCode === 75) {
      e.preventDefault()
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

  return React.createElement(
    (component = "div"),
    {
      ref,
      "data-level": -1,
      ...otherProps
    },
    children
  );
};

export default Wrapper;