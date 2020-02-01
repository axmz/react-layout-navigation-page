import React, { ReactNode } from 'react'
import Level1 from '../level1/level1'
import './style.css'

interface Props {
  children?: ReactNode;
  tabIndex: number;
}
const Level0:React.FC<Props> = ({tabIndex}) => {

  return (
    <div tabIndex={tabIndex} className='tabbable__level--0' data-level={0}>
      <Level1 tabIndex={0}>2</Level1>
      <Level1 tabIndex={1}>2</Level1>
      <Level1 tabIndex={2}>2</Level1>
    </div>
  )
}

export default Level0