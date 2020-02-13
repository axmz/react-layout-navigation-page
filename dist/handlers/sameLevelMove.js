import handlerPropsValidation from "./handlerPropsValidation";
export default function sameLevelMove(e, step, handlerProps) {
  handlerPropsValidation(e, handlerProps);
  const currentEl = e.target;
  let currentLevel = parseInt(currentEl.dataset.level);
  let currentIdx = currentEl.tabIndex;
  let parentLevel = currentLevel - 1;
  const parentEl = currentEl.closest(`[data-level="${parentLevel}"]`);
  const tabbables = parentEl.querySelectorAll(`[data-level="${currentLevel}"][tabIndex]`);
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
//# sourceMappingURL=sameLevelMove.js.map