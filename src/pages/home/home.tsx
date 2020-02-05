import React from "react";
import { Wrapper, Level0, Level1 } from "../../components/tabbable-navigation";
import styles from "./styles.module.scss";
import { ReactComponent as HomeSvg } from './assets/home-solid.svg';
import { ReactComponent as LockSvg } from './assets/lock-solid.svg';
import { ReactComponent as CogsSvg } from './assets/cogs-solid.svg';
import { ReactComponent as Html5Svg } from './assets/html5-brands.svg';


const Home = () => {
  const clickCallBack = (e: any) => {
    e.target.style.scale = 0.95;
    function func(t: any) {
      setTimeout(() => (t.style.scale = 1), 100);
    }
    func(e.target);
  };

  return (
    <>
      <Wrapper className={styles.container}>
        <Level0 tabIndex={0} className={styles.sidebar}>
          <div  className={styles.skip}>
            <Html5Svg/>
            <span>skipped</span>
          </div>
          <div className={styles.lines}>
            <Level1 tabIndex={0} className={styles.line}>01</Level1>
            <Level1 tabIndex={1} className={styles.line}>02</Level1>
            <Level1 tabIndex={2} className={styles.line}>03</Level1>
            <Level1 tabIndex={3} className={styles.line}>04</Level1>
          </div>
        </Level0>
        <Level0 tabIndex={1} className={styles.header}>
          <Level1 tabIndex={0} className={styles.hdr}  callback={clickCallBack}>10</Level1>
          <Level1 tabIndex={1} className={styles.hdr}  callback={clickCallBack}>11</Level1>
          <Level1 tabIndex={2} className={styles.hdr}  callback={clickCallBack}>12</Level1>
          <Level1 tabIndex={3} className={styles.hdr}  callback={clickCallBack}>13</Level1>
        </Level0>
        <Level0 tabIndex={2} className={styles.main}>
          <Level1 tabIndex={0} className={styles.m} component={'textarea'} defaultValue={'Use tab, ctrl+j, ctrl+k, esc and enter to see how easy it is to navigate.'}></Level1>
          <Level1 tabIndex={1} className={styles.ms} component={'select'}>
            <option value="mercedes" tabIndex={0}>Mercedes</option>
            <option value="volvo" tabIndex={1}>Volvo</option>
            <option value="saab" tabIndex={2}>Saab</option>
            <option value="audi" tabIndex={3}>Audi</option>
          </Level1>
          <Level1 tabIndex={2} className={styles.m} component={'input'} placeholder={'Search'}></Level1>
        </Level0>
        <Level0 tabIndex={3} className={styles.footer}>
          <Level1 tabIndex={0} className={styles.f} callback={clickCallBack}><HomeSvg/></Level1>
          <Level1 tabIndex={1} className={styles.f} callback={clickCallBack}><LockSvg/></Level1>
          <Level1 tabIndex={2} className={styles.f} callback={clickCallBack}><CogsSvg/></Level1>
        </Level0>
      </Wrapper>
      <div className={styles.body}>1</div>
    </>
  );
};

export default Home;
