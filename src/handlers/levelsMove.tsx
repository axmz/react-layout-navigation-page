import { HandlerProps } from "../handlers";

export function levelsMove(e: any, step: -1 | 1, props: HandlerProps) {

  console.log('e', e)
  console.log('in', !props?.preventDefault) 
  console.log('undef', props?.preventDefault === undefined )
  console.log('true' ,props?.preventDefault === true)
  if (
    !props ||
    !props.preventDefault ||
    props.preventDefault === undefined ||
    props.preventDefault === true
  ) {
    // e.preventDefault();
  }
  console.log('in', !props?.stopPropagation) 
  console.log('undef', props?.stopPropagation === undefined )
  console.log('true' ,props?.stopPropagation === true)
  if (
    !props ||
    !props.stopPropagation ||
    props.stopPropagation === undefined ||
    props.stopPropagation === true
  ) {
    // e.stopPropagation();
  }

  const currentEl = e.target;
  let currentLevel = parseInt(currentEl.dataset.level);
  const parentLevel = currentLevel === -1 ? -1 : currentLevel - 1;
  const parentParentLevel = parentLevel === -1 ? -1 : parentLevel - 1;
  const parentEl = currentEl.closest(`[data-level="${parentLevel}"]`);
  const parentParentEl = parentEl.closest(
    `[data-level="${parentParentLevel}"]`
  );
  const parentIndex = parentEl.tabIndex;
  const next = currentLevel + step;
  let tabbables = [];
  if (step > 0) {
    tabbables = currentEl.querySelectorAll(`[data-level="${next}"]`);
    if (tabbables.length > 0) {
      const nextElement = tabbables[0];
      nextElement.focus();
    } else {
      // callback
      if (props?.callback) {
        props.callback(e);
      }
    }
  } else if (step < 0) {
    tabbables = parentParentEl.querySelectorAll(
      `[data-level="${next}"][tabIndex="${parentIndex}"]`
    );
    if (tabbables.length > 0) {
      const nextElement = tabbables[0];
      nextElement.focus();
    } else {
      parentEl.focus();
    }
  }
}
