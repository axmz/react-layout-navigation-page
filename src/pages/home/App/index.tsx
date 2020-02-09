import React from "react";
import styles from "./styles.module.scss";
import Sidebar from "./sidebar/sidebar";
import { Wrapper } from "../../../components/tabbable-navigation";
import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";

const App = () => {
  return (
    <Wrapper className={styles.container} tabIndex={-1}>
      <Sidebar />
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
};

export default App;
