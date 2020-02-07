import {RefObject} from 'react'
import { WithLevel } from "../handlers";

export default function sameLevelMove(
  e: any,
  step: number,
  ref: RefObject<WithLevel<HTMLDivElement>>
) {
  e.preventDefault();
  // const currentEl: WithLevel = e.target;
  // const baseLevel: number = parseInt(currentEl.dataset.level);
  const currentEl: WithLevel<HTMLDivElement> = ref.current!;
  const currentLevel: number = parseInt(currentEl.dataset.level);
  let currentIdx: number = currentEl.tabIndex;
  let parentLevel = currentLevel - 1;
  debugger;

  interface K extends Element {
    dataset?: {level: string}
  }

  let parentEl = e.path.find((el: K) => {
    if (el.dataset && el.dataset.level) {
      return parseInt(el.dataset.level) === parentLevel;
    }
    return false;
  })

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
  const nextElement = tabbables[nextIdx] as WithLevel<HTMLDivElement>;
  nextElement.focus();
}




