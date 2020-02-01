import React, { useEffect, useState } from "react";
import { HotKeys } from "react-hotkeys";
import Level0 from "./components/level0/level0";
import "./App.css";

const App: React.FC = () => {
  const [levelAboveActive, setLevelAboveActive] = useState(0);

  useEffect(() => {
    const app = document.querySelector(".App") as HTMLDivElement;
    app.focus();
  }, []);

  const keyMap = {
    NEXT: ["ctrl+l", "tab", "ctrl+j"],
    PREV: ["ctrl+h", "shift+tab", "ctrl+k"],
    ENTER: ["enter"],
    ESC: ["esc"]
  };

  const handlers = {
    NEXT: (e: any) => {
      sameLevelMove(e, +1);
    },
    PREV: (e: any) => {
      sameLevelMove(e, -1);
    },
    ENTER: (e: any) => {
      moveBtwLevels(e, 1);
    },
    ESC: (e: any) => {
      moveBtwLevels(e, -1);
    }
  };

  function sameLevelMove(e: any, step: number) {
    e.preventDefault();
    const tabIdx = e.target.tabIndex;
    const parentEl = e.target.parentElement;
    let currentLevel = parseInt(e.target.dataset.level ?? -1);
    let currentIdx = tabIdx;

    if (currentLevel === -1) {
      currentLevel = 0;
    }

    if (tabIdx === -1) {
      currentIdx = -1;
    }

    setLevelAboveActive(currentLevel);

    const tabbables = parentEl.querySelectorAll(
      `[data-level="${currentLevel}"][tabIndex]`
    );

    const l = tabbables.length;
    let nextIdx = currentIdx;
    if (currentIdx + step > l - 1) {
      nextIdx = 0;
    } else if (currentIdx + step < 0) {
      nextIdx = l - 1;
    } else {
      nextIdx = currentIdx + step;
    }
    const nextElement = tabbables[nextIdx];
    nextElement.focus();
  }

  function moveBtwLevels(e: any, step: number) {
    e.preventDefault();
    const parentEl = e.target;
    const tabIdx = e.target.parentElement.tabIndex;
    let currentLevel = parseInt(e.target.dataset.level ?? -1);
    const st = currentLevel + step;
    let tabbables = parentEl.parentElement.parentElement.querySelectorAll(
      `[data-level="${st}"][tabIndex="${tabIdx}"]`
    );
    setLevelAboveActive(currentLevel - 1);
    if (step > 0) {
      tabbables = parentEl.querySelectorAll(`[data-level="${st}"][tabIndex]`);
      setLevelAboveActive(currentLevel);
    }
    const l = tabbables.length;
    if (l > 0) {
      const nextElement = tabbables[0];
      nextElement.focus();
    }
  }

  return (
    <HotKeys keyMap={keyMap} handlers={handlers} className="App">
      <Level0 tabIndex={0}></Level0>
      <Level0 tabIndex={1}></Level0>
      <Level0 tabIndex={2}></Level0>
    </HotKeys>
  );
};

export default App;
