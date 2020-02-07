import React, { useRef, HtmlHTMLAttributes, ElementType, useEffect } from "react";
import { WithLevel, Props, WithAttributes, levelBelowMove, moveBtwLevels } from "../../../handlers";

const Level1: React.FC<Props> = ({
  component,
  children,
  ...otherProps
}) => {
  const ref = useRef<WithLevel<HTMLElement>>(null);
  const handler = (e: KeyboardEvent) => {
    // enter
    if (e.keyCode === 13 && !e.ctrlKey) {
      // e.stopPropagation()
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
