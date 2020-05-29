import React, { useState } from "react";
import App from "./components/App";
import Info from "./components/Info";
import { LogProvider } from './context/log-context'

const Home = () => {
  return (
    <>
      <LogProvider>
        <App />
      </LogProvider>
      <Info />
    </>
  );
};

export default Home;
