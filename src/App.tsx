import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo
} from "react";
import { HotKeys, HotKeysProps, HotKeysEnabled } from "react-hotkeys";
import Level0 from "./components/level0/level0";
import "./App.css";

const App: React.FC = () => {
  const [activeLevel, setLevel] = useState(0);
  const [levelAboveActive, setLevelAboveActive] = useState(0);

  // focus handler for addEventListener
  const logLevel = useCallback(() => {
    console.log("focusHandler: activeLevel", activeLevel);
  }, [activeLevel]);

  const focusHandler = useCallback(e => _focusHandler(e), [activeLevel]);

  function _focusHandler(e: any) {
    const lvl = parseInt(e.target.dataset.level ?? -1);
    // setLevel(lvl);
    console.log("focusHandler: lvl", lvl);
    logLevel();
  }

  // attaches 'focus' eventlistener to the entire component
  useEffect(() => {
    const app = document.querySelector(".App") as HTMLDivElement;
    app.focus();
    app.addEventListener("focusin", focusHandler);
    return () => {
      app.removeEventListener("focusin", focusHandler);
    };
  }, []);

  const keyMap = {
    NEXT: ["ctrl+l", "tab"],
    NEXT_DOWN: ["ctrl+j"],
    PREV: ["ctrl+h", "shift+tab"],
    PREV_DOWN: ["ctrl+k"],
    ENTER: ["enter"],
    ESC: ["esc"]
  };

  function sameLevelMove(e: any, step: number) {
    e.preventDefault();
    // const level = parseInt(e.target.dataset.level ?? -1);
    // const level = level;
    // console.log("levelx", activeLevel);
    // console.log("level", e.target.dataset.level);
    const tabIdx = e.target.tabIndex;
    // const parentEl = e.target
    const parentEl = e.target.parentElement;
    console.log("sameLevelMove: parentEl", parentEl);

    let currentLevel = parseInt(e.target.dataset.level ?? -1);
    let currentIdx = tabIdx;
    console.log("sameLevelMove: activeLevel", activeLevel);
    console.log("sameLevelMove: currentLevel", currentLevel);

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
    console.log("sameLevelMove: tabbables", tabbables);

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

  function levelBelowMove(e: any, step: number) {
    e.preventDefault();
    // const level = parseInt(e.target.dataset.level) ?? -1;
    const tabIdx = e.target.tabIndex;
    const parentEl = e.target;

    let currentLevel = levelAboveActive + 1;
    let currentIdx = tabIdx;

    console.log("tabIdx", tabIdx);
    console.log("level", activeLevel);
    // if (level === -1) {
    //   currentLevel = 0;
    // }

    if (tabIdx === -1) {
      currentIdx = -1;
    }

    console.log(e.target, activeLevel, currentLevel);
    const tabbables = parentEl.querySelectorAll(
      `[data-level="${currentLevel}"][tabIndex]`
    );

    console.log(tabbables);

    const l = tabbables.length;
    let nextIdx = currentIdx;
    console.log(nextIdx);
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
    // const level = parseInt(e.target.dataset.level) || -1;
    const parentEl = e.target;

    console.log("moveBtwLevels: parentEl", parentEl);
    const tabIdx = e.target.parentElement.tabIndex;
    // const tabIdx = 0;

    console.log("moveBtwLevels: activeLevel", activeLevel);
    let currentLevel = parseInt(e.target.dataset.level ?? -1);
    console.log("moveBtwLevels: currentLevel", currentLevel);
    // let currentLevel = activeLevel;
    const st = currentLevel + step;
    console.log("moveBtwLevels: st", st);
    console.log("moveBtwLevels: tabIdx", tabIdx);
    let tabbables = parentEl.parentElement.parentElement.querySelectorAll(
      `[data-level="${st}"][tabIndex="${tabIdx}"]`
    );
    if (step > 0) {
    tabbables = parentEl.querySelectorAll(
      `[data-level="${st}"][tabIndex]`
    );
    }
    console.log("moveBtwLevels: tabbables", tabbables);
    const l = tabbables.length;
    if (l > 0) {
      const nextElement = tabbables[0];
      nextElement.focus();
    }
  }

  const handlers = {
    NEXT: (e: any) => {
      sameLevelMove(e, +1);
    },
    PREV: (e: any) => {
      sameLevelMove(e, -1);
    },
    NEXT_DOWN: (e: any) => {
      levelBelowMove(e, +1);
    },
    PREV_DOWN: (e: any) => {
      levelBelowMove(e, -1);
    },
    ENTER: (e: any) => {
      moveBtwLevels(e, 1);
    },
    ESC: (e: any) => {
      moveBtwLevels(e, -1);
    }
  };

  return (
    <HotKeys keyMap={keyMap} handlers={handlers} className="App">
      <Level0 tabIndex={0}></Level0>
      <Level0 tabIndex={1}></Level0>
      <Level0 tabIndex={2}></Level0>
    </HotKeys>
  );
};

export default App;
