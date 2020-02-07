import { ComponentPropsWithRef, HTMLAttributes, RefObject, ElementType } from "react";

export type WithLevel<K = HTMLElement> = {
  dataset: {
    level: string;
  };
  ref: RefObject<K>;
} & K;

export type WithAttributes<T extends HTMLElement> = {
  "data-level": number;
  ref: RefObject<T>;
} & HTMLAttributes<T>;

export type Props = {
  callback?: (e: any) => void;
  component?: string;
} & ComponentPropsWithRef<ElementType>

