import {WithLevel, HandlerProps} from '../handlers'

export default function levelBelowMove(
  e: any, // KeyboardEvent
  step: -1 | 1,
  props?: HandlerProps
) {
  if (props?.preventDefault === true || !props || !("preventDefault" in props)) {
    e.preventDefault();
  }
  e.stopPropagation();
  const parentEl: WithLevel<HTMLElement> = e.currentTarget;
  let currentIdx:number = e.target.tabIndex;
  const parentLevel: number = parseInt(parentEl.dataset.level ?? "-1");
  const currentLevel: number = parseInt(e.target.dataset.level ?? "-1");

  if (currentLevel === parentLevel) {
    currentIdx = -1;
  }

  const tabbables = parentEl.querySelectorAll(
    `[data-level="${parentLevel + 1}"][tabIndex]`
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
  if (nextElement) {
    nextElement.focus();
  }
}

