import React, { ReactNode } from "react";
import {Level0, LevelNext} from "react-layout-navigation";
import "./style.css";

const Test0: React.FC<{ tabIndex: number; children?: ReactNode }> = ({
  tabIndex,
  children
}) => {
  return (
    <LevelNext data-level={0} className="tabbable__level--0" tabIndex={tabIndex}>
    {/* <Level0 className="tabbable__level--0" tabIndex={tabIndex}> */}
      {children}
    {/* </Level0> */}
    </LevelNext>
  );
};

export default Test0;
