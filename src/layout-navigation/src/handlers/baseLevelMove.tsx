import { WithLevel, HandlerProps } from ".";
import handlerPropsValidation from "./handlerPropsValidation"

export default function baseLevelMove(
  e: any,
  step: -1 | 1,
  handlerProps: HandlerProps
) {
  handlerPropsValidation(e, handlerProps)
  const baseLevel: number = 0;
  const currentEl: WithLevel = e.target;
  const baseEl = currentEl.closest(`[data-level="${baseLevel}"]`) as WithLevel;
  let currentLevel: number = parseInt(currentEl.dataset.level);
  let currentIdx: number;
  if (currentLevel === -1) {
    currentLevel = 0;
    currentIdx = -1;
  } else {
    currentIdx = baseEl.tabIndex;
  }
  const parentEl: WithLevel = e.currentTarget;

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
  if (nextElement) {
    nextElement.focus();
  }
  // // focus first child - doesnt work well
  // const firstArr = Array.from(nextElement.children) as HTMLElement[];
  // const first = firstArr.find((el: HTMLElement) => {
  //   if (el.dataset && el.dataset.level) {
  //     return parseInt(el.dataset.level) === currentLevel + 1;
  //   }
  // }) as WithLevel;
  // if (first) first.focus();
}
