import { WithLevel, HandlerProps } from "../handlers";

export default function sameLevelMove(
  e: any,
  step: -1 | 1,
  props?: HandlerProps,
) {
  if (props?.preventDefault === true || !props || !("preventDefault" in props)) {
    e.preventDefault();
  }
  e.stopPropagation();
  const currentEl: WithLevel = e.target;
  let currentLevel: number = parseInt(currentEl.dataset.level);
  let currentIdx: number = currentEl.tabIndex;
  let parentLevel = currentLevel - 1;
  const parentEl = currentEl.closest(`[data-level="${parentLevel}"]`) as WithLevel;
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
  const nextElement = tabbables[nextIdx] as WithLevel;
  if (nextElement){
    nextElement.focus();
  }
}
