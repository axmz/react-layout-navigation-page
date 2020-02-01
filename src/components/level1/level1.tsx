import React, { ReactNode } from "react";
import "./style.css";

interface Props {
  children?: ReactNode;
  tabIndex: number;
}
const Level1: React.FC<Props> = ({ tabIndex, children }) => {
  return (
    <div tabIndex={tabIndex} className="tabbable__level--1" data-level={1}>
      {children}
    </div>
  );
};

export default Level1;
