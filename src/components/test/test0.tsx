import React, { ReactNode } from "react";
import Level0 from "../tabbable-navigation/level0/level0";
import "./style.css";

const Test0: React.FC<{ tabIndex: number; children?: ReactNode }> = ({
  tabIndex,
  children
}) => {
  return (
    <Level0 className="tabbable__level--0" tabIndex={tabIndex}>
      {children}
    </Level0>
  );
};

export default Test0;
