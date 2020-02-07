<<<<<<< HEAD
export type WithLevel = {
  dataset: {
    level: string;
  };
} & HTMLElement
=======
import { ComponentPropsWithRef, HTMLAttributes, RefObject, ElementType } from "react";

export type WithLevel<K = Element> = {
  dataset: {
    level: string;
  };
  ref: RefObject<K>;
} & K;

export type WithAttributes<T extends Element> = {
  "data-level": number;
  ref: RefObject<T>;
} & HTMLAttributes<T>;

export type Props = {
  callback?: (e: any) => void;
  component?: string;
} & ComponentPropsWithRef<ElementType>

>>>>>>> change-framework
