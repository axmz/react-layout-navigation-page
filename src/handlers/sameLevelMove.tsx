import {RefObject} from 'react'
import { WithLevel } from "../handlers";

export default function sameLevelMove(
  e: any,
  step: number,
  ref: RefObject<WithLevel>
) {
  e.preventDefault();
  let currentIdx:number = e.target.tabIndex;
  const parentLevel: number = 0;
  let currentLevel: number = parseInt(e.target.dataset.level ?? "-1");
  const parentEl = ref.current!
  const parentIdx: number = parentEl.tabIndex;

  debugger;
  if (currentLevel === -1) {
    currentLevel = 0;
    currentIdx = -1;
  }
  
  if (currentLevel > parentLevel) {
    currentIdx = e.target.parentElement.tabIndex
  }
  
  // debugger;

  const tabbables = parentEl.querySelectorAll(
    `[data-level="${parentLevel}"][tabIndex]`
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
  const nextElement = tabbables[nextIdx] as WithLevel;
  nextElement.focus();
}




