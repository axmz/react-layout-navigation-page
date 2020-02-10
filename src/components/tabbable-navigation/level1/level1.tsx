import React, { useRef, useEffect, useCallback } from "react";
import {
  WithLevel,
  Props,
  WithAttributes,
  levelsMove
} from "../../../handlers";

const Level1: React.FC<Props> = ({
  component,
  children,
  preventDefault,
  stopPropagation,
  callback,
  ...otherProps
}) => {
  const ref = useRef<WithLevel>(null);
  const handlerProps = { preventDefault, callback, stopPropagation };
  const handler = useCallback(
    (e: KeyboardEvent) => {
      // enter / ctrl+l
      if (
        (e.keyCode === 13 && !e.ctrlKey) ||
        (!e.shiftKey && e.ctrlKey && e.keyCode === 76)
        ) {
        levelsMove(e, +1, handlerProps);
        return;
      }
      // esc / ctrl+h
      if (e.keyCode === 27 || (!e.shiftKey && e.ctrlKey && e.keyCode === 72)) {
        levelsMove(e, -1, handlerProps);
        return;
      }
    },
    []
  );

  useEffect(() => {
    const app = ref.current;
    if (app) {
      app.focus();
      app.addEventListener("keydown", handler);
    }
    return () => {
      app?.removeEventListener("keydown", handler);
    };
  }, [ref, handler]);

  let c = component ? component : "div";
  return React.createElement<WithAttributes<WithLevel>, WithLevel>(
    c,
    {
      ref,
      "data-level": 1,
      ...otherProps,
    },
    children
  );
};

export default Level1;
