import React, { ReactNode, useRef} from "react";
import { HotKeys } from "react-hotkeys";
import { levelBelowMove, WithLevel } from "../../../handlers";

interface Props  {
  children?: ReactNode;
  innerRef?: React.RefObject<HTMLElement>;
  tabIndex: number;
  className?: string;
  component?: string;
  callback?: (e: any) => void;
  placeholder?: string;
  defaultValue?: string;
}
const Level1: React.FC<Props> = ({ tabIndex, children, callback, ...otherProps }) => {
  const ref = useRef<WithLevel>(null);
  const keyMap = { ENTER: ["enter"] };
  const handlers = {
    ENTER: (e: any) => {
      if (callback) {
        callback(e);
      } else {
        levelBelowMove(e, 1, ref)
      }
    }
  };

  return (
    <HotKeys
    innerRef={ref}
      keyMap={keyMap}
      handlers={handlers}
      tabIndex={tabIndex}
      data-level={1}
      {...otherProps}
    >
      {children}
    </HotKeys>
  );
};

export default Level1;
