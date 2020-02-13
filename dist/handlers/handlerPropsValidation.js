export default function handlerPropsValidation(e, handlerProps) {
  if (handlerProps.preventDefault === false) {} else {
    e.preventDefault();
  }

  if (handlerProps.stopPropagation === true) {
    e.stopPropagation();
  }
}
//# sourceMappingURL=handlerPropsValidation.js.map