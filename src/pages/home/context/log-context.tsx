import React, { createContext, useState, ReactNode, FC } from 'react'

const defaultContext = { log: [""], updateLog: (message: string) => { } }

export const LogContext = createContext(defaultContext)

export const LogProvider: FC< { children: ReactNode } > = ({ children }) => {
    const [log, setLog] = useState([""]);
    const updateLog = (message: string) => {
        setLog(prev => {
            const newArr = [...prev];
            newArr.push(message);
            return newArr;
        });
    };
    const store = { log, updateLog }

    return <LogContext.Provider value={store}>{children}</LogContext.Provider>

}