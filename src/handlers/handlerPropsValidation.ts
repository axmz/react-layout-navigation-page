import { HandlerProps } from ".";

export default function handlerPropsValidation (e: any, props: HandlerProps) {
  if (props?.preventDefault === false) {
  } else {
    e.preventDefault();
  }
  if (props?.stopPropagation === true) {
    e.stopPropagation();
  } 
}