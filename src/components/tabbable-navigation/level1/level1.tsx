import React, { ReactNode, TextareaHTMLAttributes } from "react";
import { HotKeys } from "react-hotkeys";

interface Props  {
  children?: ReactNode;
  tabIndex: number;
  className?: string;
  component?: string;
  callback?: (e: any) => void;
  placeholder?: string;
  defaultValue?: string;
}
const Level1: React.FC<Props> = ({ tabIndex, children, callback, ...otherProps }) => {
  const keyMap = { ENTER: ["enter"] };
  const handlers = {
    ENTER: (e: any) => {
      if (callback) {
        callback(e);
      }
    }
  };

  return (
    <HotKeys
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
