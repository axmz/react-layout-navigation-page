import React, { ReactNode, useRef } from "react";
import { HotKeys } from "react-hotkeys";
import { levelBelowMove, WithLevel } from "../../../utils/hotkeys-handlers";

interface Props {
  children?: ReactNode;
  tabIndex: number;
  className?: string;
}
const Level0: React.FC<Props> = ({ children, tabIndex, ...otherProps }) => {
  const ref = useRef<WithLevel>(null);

  const keyMap = {
    NEXT0: ["ctrl+j"],
    PREV0: ["ctrl+k"],
    NOTHING0: ["enter"]
  };

  const handlers = {
    NEXT0: (e: any) => {
      levelBelowMove(e, +1, ref);
    },
    PREV0: (e: KeyboardEvent | undefined): void => {
      if (e) {
        levelBelowMove(e, -1, ref);
      }
    },
    NOTHING0: (e: KeyboardEvent | undefined): void => {
      if (e) {
        e.preventDefault();
      }
    }
  };

  return (
    <HotKeys
      innerRef={ref}
      keyMap={keyMap}
      handlers={handlers}
      tabIndex={tabIndex}
      data-level={0}
      {...otherProps}
    >
      {children}
    </HotKeys>
  );
};

export default Level0;
