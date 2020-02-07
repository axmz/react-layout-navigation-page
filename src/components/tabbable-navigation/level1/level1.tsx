import React, { useRef, HtmlHTMLAttributes, ElementType, useEffect } from "react";
import { WithLevel, Props, WithAttributes, levelBelowMove, levelsMove } from "../../../handlers";

const Level1: React.FC<Props> = ({
  component,
  children,
  preventDefault,
  ...otherProps
}) => {
  const ref = useRef<WithLevel<HTMLElement>>(null);
  const props = {preventDefault}
  const handler = (e: KeyboardEvent) => {
    // enter
    if (e.keyCode === 13 && !e.ctrlKey) {
      levelsMove(e, +1, props)
      return
    }
    // esc
    if (e.keyCode === 27) {
      levelsMove(e, -1, props)
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
  return React.createElement<WithAttributes<WithLevel>, WithLevel>(
    c,
    {
      ref,
      "data-level": 1,
      ...otherProps
    },
    children
  );
};

export default Level1;
