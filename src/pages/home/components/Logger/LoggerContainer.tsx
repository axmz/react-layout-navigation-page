import React, { useContext } from "react";
import Logger from './Logger'
import {LogContext} from "../../context/log-context";

const LoggerContainer = () => {
  const { log } = useContext(LogContext);
  console.log({log})

  let parsed = "";
  if (log) {
    parsed = log.reduce((acc, cur, i) => {
      if (i === 0) {
        return acc + "> " + cur;
      }
      return acc + "\n> " + cur;
    }, "");
  }

  return (
    <Logger text={parsed}/>
  )
}

export default LoggerContainer