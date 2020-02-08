import {
  ComponentPropsWithRef,
  HTMLAttributes,
  RefObject,
  ElementType
} from "react";

export type WithLevel<K = HTMLElement> = {
  dataset: {
    level: string;
  };
  ref: RefObject<K>;
  shortcut: string;
} & K;

export type WithAttributes<T extends HTMLElement> = {
  "data-level": number;
  preventDefault: boolean;
  shortcut: string;
  ref: RefObject<T>;
} & HTMLAttributes<T>;

export type Props = {
  callback?: (e: any) => void;
  component?: string;
  shortcut: string;
} & ComponentPropsWithRef<ElementType>;

export interface HandlerProps {
  preventDefault?: boolean;
  callback?: (e: any) => void;
}
