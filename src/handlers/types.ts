import {
  ComponentPropsWithRef,
  HTMLAttributes,
  // RefObject,
  ElementType
} from "react";

export type WithLevel<K = HTMLElement> = {
  dataset: { level: string; };
  tabIndex: number;
  // ref: RefObject<K>;
} & K;

export type WithAttributes<T extends HTMLElement> = {
  "data-level": number;
  preventDefault: boolean;
  stopPropagation: boolean;
  // ref: RefObject<T>;
} & HTMLAttributes<T>;

export type Props = {
  callback?: (e: any) => void;
  component?: string;
  shortcut: string;
} & ComponentPropsWithRef<ElementType>;

export interface HandlerProps {
  preventDefault?: boolean;
  stopPropagation?: boolean;
  callback?: (e: any) => void;
}
