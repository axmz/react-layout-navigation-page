import React, { useEffect, useRef } from "react";
import { HotKeys } from "react-hotkeys";
import {sameLevelMove, moveBtwLevels} from './utils/hotkeys-handlers'
import Level0 from "./components/level0/level0";
import "./App.css";

const App: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const app = document.querySelector(".App") as HTMLDivElement;
    app.focus();
  }, []);

  const keyMap = {
    NEXT: ["ctrl+l", "tab"],
    PREV: ["ctrl+h", "shift+tab"],
    ENTER: ["enter"],
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
    ENTER: (e: any) => {
      moveBtwLevels(e, 1);
    },
    ESC: (e: any) => {
      moveBtwLevels(e, -1);
    },
    NOTHING: (e: any) => {
      e.preventDefault();
    }
  };

  return (
    <HotKeys innerRef={ref} keyMap={keyMap} handlers={handlers} className="App">
      <Level0 tabIndex={0}></Level0>
      <Level0 tabIndex={1}></Level0>
      <Level0 tabIndex={2}></Level0>
    </HotKeys>
  );
};

export default App;
