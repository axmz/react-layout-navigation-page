import { RefObject } from "react";
import { WithLevel } from ".";

export default function baseLevelMove(
  e: any,
  step: number,
  ref: RefObject<WithLevel>
) {
  e.preventDefault();
  const baseLevel: number = 0;
  const currentEl: WithLevel = e.target;
  let currentLevel: number = parseInt(currentEl.dataset.level);
  let currentIdx: number;
  if (currentLevel === -1) {
    currentLevel = 0;
    currentIdx = -1;
  } else {
    currentIdx = e.nativeEvent.path.find((el: HTMLElement) => {
      if (el.dataset.level) {
        return parseInt(el.dataset.level) === baseLevel;
      }
      return false;
    }).tabIndex;
  }
  const parentEl: WithLevel = ref.current!;

  const tabbables = parentEl.querySelectorAll(`[data-level="0"][tabIndex]`);

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
  // focus first child
  // const firstArr = Array.from(nextElement.children) as HTMLElement[];
  // const first = firstArr.find((el: HTMLElement) => {
  //   if (el.dataset && el.dataset.level) {
  //     return parseInt(el.dataset.level) === currentLevel + 1;
  //   }
  // }) as WithLevel;
  // if (first) first.focus();
}
