import React, { ReactNode } from "react";
import {Wrapper, LevelNext} from "react-layout-navigation";
import './style.css'

const TestWrapper: React.FC<{children: ReactNode}> = ({children}) => {

  return ( 
    // <LevelNext data-level={-1} tabIndex={-1} className="App">
  <Wrapper tabIndex={-1} className="App">
      {children}
  </Wrapper>
    // </LevelNext>
 )
};

export default TestWrapper;
