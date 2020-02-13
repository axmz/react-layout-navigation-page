import handlerPropsValidation from './handlerPropsValidation';
export default function levelBelowMove(e, // KeyboardEvent
step, handlerProps) {
  handlerPropsValidation(e, handlerProps);
  const parentEl = e.currentTarget;
  let currentIdx = e.target.tabIndex;
  const parentLevel = parseInt(parentEl.dataset.level ?? "-1");
  const currentLevel = parseInt(e.target.dataset.level ?? "-1");

  if (currentLevel === parentLevel) {
    currentIdx = -1;
  }

  const tabbables = parentEl.querySelectorAll(`[data-level="${parentLevel + 1}"][tabIndex]`);
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

  if (nextElement) {
    nextElement.focus();
  }
}
//# sourceMappingURL=levelBelowMove.js.map