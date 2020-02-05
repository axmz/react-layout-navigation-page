import React from "react";
import { Wrapper, Level0, Level1 } from "../../components/tabbable-navigation";
import styles from "./styles.module.scss";
import { ReactComponent as HomeSvg } from './assets/home-solid.svg';
import { ReactComponent as LockSvg } from './assets/lock-solid.svg';
import { ReactComponent as CogsSvg } from './assets/cogs-solid.svg';
import { ReactComponent as Html5Svg } from './assets/html5-brands.svg';
import Level2 from "../../components/tabbable-navigation/level2/level2";


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
            <Level1 tabIndex={0} className={styles.line}>
              <Level2 tabIndex={0} data-level={2}>0</Level2>
              <Level2 tabIndex={1} data-level={2}>1</Level2>
              <Level2 tabIndex={2} data-level={2}>2</Level2>
            </Level1>
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
          <Level1 tabIndex={0} className={styles.m} component={'textarea'} defaultValue={'Use tab, ctrl+j, ctrl+k, esc and enter to see how easy it is to navigate. \n\nFor more scroll down.'}></Level1>
          <Level1 tabIndex={1} className={styles.ms} component={'select'}>
            <Level2 tabIndex={0} component={'option'}>BMW</Level2>
            <Level2 tabIndex={1} component={'option'}>BbW</Level2>
            <Level2 tabIndex={2} component={'option'}>BnW</Level2>
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
