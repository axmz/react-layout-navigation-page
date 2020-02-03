import React, { useEffect, useRef, ReactNode } from "react";
import { HotKeys } from "react-hotkeys";
import { sameLevelMove, moveBtwLevels } from "../../utils/hotkeys-handlers";

interface Props {
  children?: ReactNode;
  className: string;
}
const Wrapper: React.FC<Props> = ({ children, ...otherProps }) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const app = document.querySelector(".App") as HTMLDivElement;
    app.focus();
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
    <HotKeys innerRef={ref} keyMap={keyMap} handlers={handlers} data-hotKeysParent={true} {...otherProps}>
      {children}
    </HotKeys>
  );
};

export default Wrapper;
