import React, { ReactNode } from "react";
import Level1 from "../tabbable-navigation/level1/level1";
import "./style.css";

const Test1: React.FC<{ tabIndex: number; children?: ReactNode }> = ({
  tabIndex,
  children
}) => {
  const onBlur = (e: FocusEvent): void => {
    const target = e.target as HTMLElement;
    target.textContent = "";
    target.removeEventListener("blur", onBlur);
  };

  const cb = (e: any) => {
    e.preventDefault();
    e.target.addEventListener("blur", onBlur);
    e.target.textContent = "Active";
  };

  return (
    <Level1 callback={cb} tabIndex={tabIndex} className="tabbable__level--1">
      {children}
    </Level1>
  );
};

export default Test1;
