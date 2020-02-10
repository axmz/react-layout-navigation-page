import React from "react";
import styles from "./styles.module.scss";
import Sidebar from "./sidebar/sidebar";
import { Wrapper } from "../../../components/tabbable-navigation";
import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";

const App = () => {
  return (
    <Wrapper
      className={styles.container}
      tabIndex={-1}
      onKeyDown={(e: KeyboardEvent) => {
        const app = e.currentTarget as HTMLInputElement;
        const target = e.target as HTMLElement;
        const id = target.id as string;
        if (id === 'search') return;
        if (e.keyCode === 191) {
          const input = app.querySelector('#search') as HTMLInputElement
          input.focus();
          e.preventDefault();
        }
      }}
    >
      <Sidebar />
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
};

export default App;
