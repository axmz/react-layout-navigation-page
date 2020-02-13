import React from 'react'
import TestWrapper from "./test/testwrapper";
import Test0 from "./test/test0";
import Test1 from "./test/test1";

const Dev = () => {

  return (
      <TestWrapper>
        <Test0 tabIndex={0}>
          <Test1 tabIndex={0}></Test1>
          <Test1 tabIndex={1}></Test1>
          <Test1 tabIndex={2}></Test1>
        </Test0>
        <Test0 tabIndex={1}>
          <Test1 tabIndex={0} />
          <Test1 tabIndex={1} />
          <Test1 tabIndex={2} />
        </Test0>
        <Test0 tabIndex={2}>
          <Test1 tabIndex={0} />
          <Test1 tabIndex={1} />
          <Test1 tabIndex={2} />
        </Test0>
      </TestWrapper>
  )
}

export default Dev