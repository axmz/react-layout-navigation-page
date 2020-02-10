import { HandlerProps } from ".";

export default function handlerPropsValidation (e: any, handlerProps: HandlerProps) {
  if (handlerProps.preventDefault === false) {
  } else {
    e.preventDefault();
  }
  if (handlerProps.stopPropagation === true) {
    e.stopPropagation();
  } 
}