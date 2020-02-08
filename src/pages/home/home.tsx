import React from "react";
import { Wrapper, Level0, Level1 } from "../../components/tabbable-navigation";
import styles from "./styles.module.scss";
import { ReactComponent as HomeSvg } from "./assets/home-solid.svg";
import { ReactComponent as LockSvg } from "./assets/lock-solid.svg";
import { ReactComponent as CogsSvg } from "./assets/cogs-solid.svg";
import { ReactComponent as Html5Svg } from "./assets/html5-brands.svg";

import { ReactComponent as Archive } from "./assets/archive-solid.svg";
import { ReactComponent as Chart } from "./assets/chart-line-solid.svg";
import { ReactComponent as Diagram } from "./assets/project-diagram-solid.svg";
import { ReactComponent as Table } from "./assets/table-solid.svg";
import LevelNext from "../../components/tabbable-navigation/levelNext/levelNext";

const Home = () => {
  const clickCallBack = (e: any) => {
    e.preventDefault();
    e.target.style.scale = 0.95;
    function func(t: any) {
      setTimeout(() => (t.style.scale = 1), 100);
    }
    func(e.target);
  };

  return (
    <>
      <Wrapper className={styles.container} tabIndex={-1}>
        <Level0 tabIndex={0} className={styles.sidebar}>
          <div className={styles.skip}>
            <Html5Svg />
            <span>skipped</span>
          </div>
          <div className={styles.lines}>
            <Level1 tabIndex={0} className={styles.line}>
              <span>
                <strong>Menu 1</strong>
              </span>{" "}
              <span>
                <strong>></strong>
              </span>
              <div className={styles.l1container}>
                <LevelNext tabIndex={0} data-level={2} className={styles.l1}>
                  <span>
                    <strong>Submenu 1</strong>
                  </span>{" "}
                  <span>
                    <strong>></strong>
                  </span>
                  <div className={styles.l2container}>
                    <LevelNext
                      tabIndex={0}
                      data-level={3}
                      className={styles.l2}
                    >
                      <strong>SubSubmenu 1</strong>
                    </LevelNext>
                    <LevelNext
                      tabIndex={1}
                      data-level={3}
                      className={styles.l2}
                    >
                      <strong>SubSubmenu 2</strong>
                    </LevelNext>
                    <LevelNext
                      tabIndex={2}
                      data-level={3}
                      className={styles.l2}
                    >
                      <strong>SubSubmenu 3</strong>
                    </LevelNext>
                  </div>
                </LevelNext>
                <LevelNext tabIndex={1} data-level={2} className={styles.l1}>
                  <strong>Submenu 2</strong>
                </LevelNext>
              </div>
            </Level1>
            <Level1 tabIndex={1} className={styles.line}>
              <strong>Menu 2</strong>
            </Level1>
            <Level1 tabIndex={2} className={styles.line}>
              <strong>Menu 3</strong>
            </Level1>
            <Level1 tabIndex={3} className={styles.line}>
              <strong>Help</strong>
            </Level1>
          </div>
        </Level0>
        <Level0 tabIndex={1} className={styles.header}>
          <Level1 tabIndex={0} className={styles.hdr} callback={clickCallBack}>
            <Chart />
          </Level1>
          <Level1 tabIndex={1} className={styles.hdr} callback={clickCallBack}>
            <Diagram />
          </Level1>
          <Level1 tabIndex={2} className={styles.hdr} callback={clickCallBack}>
            <Table />
          </Level1>
          <Level1 tabIndex={3} className={styles.hdr} callback={clickCallBack}>
            <Archive />
          </Level1>
        </Level0>
        <Level0 tabIndex={2} className={styles.main}>
          <Level1
            tabIndex={0}
            className={styles.m}
            component={"textarea"}
            defaultValue={
              "See how easy it is to navigate... \n\nUse tab, shift+tab, ctrl+j, ctrl+k, arrows, esc and enter. \n\nFor more scroll down."
            }
          ></Level1>
          <Level1
            tabIndex={1}
            className={styles.ms}
            component={"select"}
            preventDefault={false}
          >
            <option value="mercedes" tabIndex={0}>
              Mercedes
            </option>
            <option value="volvo" tabIndex={1}>
              Volvo
            </option>
            <option value="saab" tabIndex={2}>
              Saab
            </option>
            <option value="audi" tabIndex={3}>
              Audi
            </option>
          </Level1>
          <Level1
            tabIndex={2}
            className={styles.m}
            component={"input"}
            placeholder={"Search, press /"}
          ></Level1>
        </Level0>
        <Level0 tabIndex={3} className={styles.footer}>
          <Level1 tabIndex={0} className={styles.f} callback={clickCallBack}>
            <HomeSvg />
          </Level1>
          <Level1 tabIndex={1} className={styles.f} callback={clickCallBack}>
            <LockSvg />
          </Level1>
          <Level1 tabIndex={2} className={styles.f} callback={clickCallBack}>
            <CogsSvg />
          </Level1>
        </Level0>
      </Wrapper>
      <div className={styles.body}>1</div>
    </>
  );
};

export default Home;
