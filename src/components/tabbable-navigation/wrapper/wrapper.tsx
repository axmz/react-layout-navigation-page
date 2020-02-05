import React, { useEffect, useRef, ReactNode } from "react";
import { HotKeys, configure } from "react-hotkeys";
import { sameLevelMove, moveBtwLevels, WithLevel } from "../../../utils/hotkeys-handlers";

interface Props {
  children?: ReactNode;
  className?: string;
}


const Wrapper: React.FC<Props> = ({ children, ...otherProps }) => {
  const ref = useRef<WithLevel>(null);

  useEffect(() => {
    const app = ref.current as WithLevel;
    app.focus();
    configure({  
      ignoreTags: [], 
      stopEventPropagationAfterHandling: false,
      stopEventPropagationAfterIgnoring: false,
    })
  }, []);

  const keyMap = {
    NEXT: ["ctrl+l", "tab"],
    PREV: ["ctrl+h", "shift+tab"],
    ESC: ["esc"],
    NOTHING: ["ctrl+j", "ctrl+k"]
  };

  const handlers = {
    NEXT: (e: any) => {
      sameLevelMove(e, +1, ref);
    },
    PREV: (e: any) => {
      sameLevelMove(e, -1, ref);
    },
    ESC: (e: any) => {
      moveBtwLevels(e, -1);
    },
    NOTHING: (e: any) => {
      e.preventDefault();
    }
  };

  return (
    <HotKeys innerRef={ref} keyMap={keyMap} handlers={handlers} data-level={-1} {...otherProps}>
      {children}
    </HotKeys>
  );
};

export default Wrapper;
