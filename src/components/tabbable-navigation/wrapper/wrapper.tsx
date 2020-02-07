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
<<<<<<< HEAD
    const app = ref.current as WithLevel;
    app.focus();
    configure({  
      ignoreTags: [], 
      stopEventPropagationAfterHandling: false,
      stopEventPropagationAfterIgnoring: false,
    })
  }, []);

  const keyMap = {
    NEXT: ["l", "tab" ],
    PREV: ["h", "shift+tab"],
    ESC: ["esc"],
    NOTHING: ["ctrl+j", "ctrl+k"]
  };

  const handlers = {
    NEXT: (e: any) => {
      baseLevelMove(e, +1, ref);
      return
    },
    PREV: (e: any) => {
      baseLevelMove(e, -1, ref);
      return
    },
    ESC: (e: any) => {
      moveBtwLevels(e, -1);
      return
    },
    NOTHING: (e: any) => {
      e.preventDefault();
      return
    }
  };

  return (
    <HotKeys innerRef={ref} keyMap={keyMap} handlers={handlers} data-level={-1} {...otherProps}>
      {children}
    </HotKeys>
=======
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
>>>>>>> change-framework
  );
};

export default Wrapper;
