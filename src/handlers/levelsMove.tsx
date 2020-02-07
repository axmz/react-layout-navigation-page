import { WithLevel } from ".";

export function moveBtwLevels(e: any, step: number) {
  e.preventDefault();
  e.stopPropagation();
  const currentEl = e.target;
  let currentLevel = parseInt(currentEl.dataset.level);
  const parentLevel = currentLevel === -1 ? -1 : currentLevel - 1;
  const parentParentLevel = parentLevel === -1 ? -1 : parentLevel - 1;
  const parentEl = e.path.find(
    (el: WithLevel<HTMLElement>) => parseInt(el.dataset.level) === parentLevel
  );
  const parentParentEl = e.path.find(
    (el: WithLevel<HTMLElement>) => parseInt(el.dataset.level) === parentParentLevel
  );
  const parentIndex = parentEl.tabIndex;
  const next = currentLevel + step;
  debugger;
  let tabbables = [];
  if (step > 0) {
    tabbables = currentEl.querySelectorAll(`[data-level="${next}"]`);
  } else if (step < 0) {
    tabbables = parentParentEl.querySelectorAll(
      `[data-level="${next}"][tabIndex="${parentIndex}"]`
    );
  }

  const l = tabbables.length;
  if (l > 0) {
    const nextElement = tabbables[0];
    nextElement.focus();
  } else {
    // do nothing
    // parentEl.focus();
  }
}
