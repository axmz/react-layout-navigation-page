import React, { useRef, useEffect } from "react";
import { WithLevel, Props, levelBelowMove, levelsMove, HandlerProps } from "../../../handlers";

const Level0: React.FC<Props> = ({
  component,
  preventDefault, 
  callback,
  stopPropagation,
  children,
  ...otherProps
}) => {
  const ref = useRef<WithLevel<HTMLDivElement>>(null);
  const props: HandlerProps = { preventDefault, callback, stopPropagation };

  const handler = (e: KeyboardEvent) => {
    // ctrl+j
    if (!e.shiftKey && e.ctrlKey && e.keyCode === 74) {
      levelBelowMove(e, +1)
      return
    }
    // ctrl+k
    if (!e.shiftKey && e.ctrlKey && e.keyCode === 75) {
      levelBelowMove(e, -1)
      return
    }
    // enter / ctrl+l
    if ((e.keyCode === 13 && !e.ctrlKey) || (!e.shiftKey && e.ctrlKey && e.keyCode === 76)) {
          console.log('ppp', props)
      levelsMove(e, +1, props)
      return
    }
    // esc / ctrl+h
    if (e.keyCode === 27 || (!e.shiftKey && e.ctrlKey && e.keyCode === 72)) {
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
  return React.createElement(
    c,
    {
      ref,
      'data-level': 0,
      ...otherProps,
    },
    children
  );
};

export default Level0;
