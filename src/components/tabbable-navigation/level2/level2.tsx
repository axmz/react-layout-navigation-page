import React, { ReactNode, useRef } from "react";
import { HotKeys } from "react-hotkeys";
import {WithLevel, levelBelowMove, sameLevelMove } from "../../../handlers";

interface Props {
  children?: ReactNode;
  tabIndex: number;
  className?: string;
  component?: string;
  callback?: (e: any) => void;
  placeholder?: string;
  defaultValue?: string;
}

const Level2: React.FC<Props> = ({
  tabIndex,
  children,
  callback,
  ...otherProps
}) => {

  const ref = useRef<WithLevel>(null);

  const keyMap = {
    NEXT2: ["ctrl+j", 'down'],
    PREV2: ["ctrl+k", 'up']
    // NOTHING2: ["enter"]
  };

  const handlers = {
    NEXT0: (e: any) => {
      sameLevelMove(e, +1, ref);
      return
    },
    PREV0: (e: KeyboardEvent | undefined): void => {
      if (e) {
        sameLevelMove(e, -1, ref );
      }
      return
    }
    // NOTHING0: (e: KeyboardEvent | undefined): void => {
    //   if (e) {
    //     e.preventDefault();
    //   }
    // }
  };

  return (
    <HotKeys
      innerRef={ref}
      keyMap={keyMap}
      handlers={handlers}
      tabIndex={tabIndex}
      data-level={2}
      {...otherProps}
    >
      {children}
    </HotKeys>
  );
};

export default Level2;
