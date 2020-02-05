import React, { ReactNode } from "react";
import Wrapper from "../tabbable-navigation/wrapper/wrapper";
import './style.css'

const TestWrapper: React.FC<{children: ReactNode}> = ({children}) => {

  return ( 
  <Wrapper className="App">
      {children}
  </Wrapper>
 )
};

export default TestWrapper;
