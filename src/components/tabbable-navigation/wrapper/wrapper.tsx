import React, { useEffect, useRef, ReactNode } from "react";
import { HotKeys, configure } from "react-hotkeys";
import { baseLevelMove, moveBtwLevels, WithLevel } from "../../../handlers";

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
  );
};

export default Wrapper;
