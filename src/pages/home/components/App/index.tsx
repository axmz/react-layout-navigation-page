import React from "react";
import { Wrapper } from "react-layout-navigation";
import styles from "./styles.module.scss";
import Sidebar from "./sidebar/sidebar";
import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";

const App = () => {
  const slashHandler = (e: KeyboardEvent) => {
    const app = e.currentTarget as HTMLInputElement;
    const target = e.target as HTMLElement;
    const id = target.id as string;
    if (id === 'search') return;
    if (e.keyCode === 191) {
      const input = app.querySelector('#search') as HTMLInputElement
      input.focus();
      e.preventDefault();
    }
  }

  return (
    <Wrapper
      className={styles.container}
      tabIndex={-1}
      onKeyDown={slashHandler}
    >
      <Sidebar />
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
};

export default App;
