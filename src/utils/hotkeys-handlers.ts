import { RefObject } from "react";

export function levelBelowMove(
  e: any, // KeyboardEvent
  step: number,
  ref: RefObject<HTMLElement>
) {
  e.preventDefault();
  const parentEl: HTMLElement = ref.current!;
  const parentIdx: number = parentEl.tabIndex;
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
  const nextElement = tabbables[nextIdx] as HTMLElement;
  if (nextElement.focus) {
    nextElement.focus();
  }
}

export function sameLevelMove(
  e: any,
  step: number,
  ref: RefObject<HTMLElement>
) {
  e.preventDefault();
  let currentIdx:number = e.target.tabIndex;
  const parentLevel: number = 0;
  let currentLevel: number = parseInt(e.target.dataset.level ?? "-1");
  const parentEl = ref.current!
  const parentIdx: number = parentEl.tabIndex;

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
  const nextElement = tabbables[nextIdx] as HTMLElement;
  nextElement.focus();
}

export function moveBtwLevels(e: any, step: number) {
  e.preventDefault();
  const parentEl = e.target;
  const tabIdx = e.target.parentElement.tabIndex;
  let currentLevel = parseInt(e.target.dataset.level ?? -1);
  const st = currentLevel + step;
  let tabbables = parentEl.parentElement.parentElement.querySelectorAll(
    `[data-level="${st}"][tabIndex="${tabIdx}"]`
  );

  if (step > 0) {
    tabbables = parentEl.querySelectorAll(`[data-level="${st}"][tabIndex]`);
  }

  const l = tabbables.length;
  if (l > 0) {
    const nextElement = tabbables[0];
    nextElement.focus();
  }
}