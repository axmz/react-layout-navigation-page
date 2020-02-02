import React, { ReactNode, useRef } from "react";
import { HotKeys } from "react-hotkeys";
import Level1 from "../level1/level1";
import { levelBelowMove } from "../../utils/hotkeys-handlers";
import "./style.css";

interface Props {
  children?: ReactNode;
  tabIndex: number;
}
const Level0: React.FC<Props> = ({ tabIndex }) => {
  const ref = useRef<HTMLElement>(null);

  const keyMap = {
    NEXT0: ["ctrl+j"],
    PREV0: ["ctrl+k"]
  };

  const handlers = {
    NEXT0: (e: any) => {
      levelBelowMove(e, +1, ref);
    },
    PREV0: (e: any) => {
      levelBelowMove(e, -1, ref);
    }
  };

  return (
    <HotKeys
      innerRef={ref}
      keyMap={keyMap}
      handlers={handlers}
      tabIndex={tabIndex}
      className="tabbable__level--0"
      data-level={0}
    >
      <Level1 tabIndex={0}></Level1>
      <Level1 tabIndex={1}></Level1>
      <Level1 tabIndex={2}></Level1>
    </HotKeys>
  );
};

export default Level0;
