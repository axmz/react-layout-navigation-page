import React, { ReactNode } from "react";
import {Level1, LevelNext} from "react-layout-navigation";
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
    <LevelNext data-level={1} callback={cb} tabIndex={tabIndex} className="tabbable__level--1" >
      {/* <Level1 callback={cb} tabIndex={tabIndex} className="tabbable__level--1"> */}
        {children}
      {/* </Level1> */}
    </LevelNext>
  );
};

export default Test1;
