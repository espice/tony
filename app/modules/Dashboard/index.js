import Image from "next/image";
import PrimaryButton from "../../components/Button/Primary";
import styles from "./index.module.scss";
import Textfield from "../../components/Textfield";
import { useState } from "react";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import PageStyles from "../../styles/page.module.scss";
import TextField from "../../components/Textfield";
import TextButton from "../../components/Button/Text";
import Loader from "../../components/Button/Loader";

export default function Content() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className={PageStyles.main}>
      <div className={PageStyles.main__subheading}>
        <div className={PageStyles.main__subheading__line} />
        <div className={PageStyles.main__subheading__text}>BOOK</div>
        <div className={PageStyles.main__subheading__line} />
      </div>

      <div className={PageStyles.main__heading}>Book a Flight</div>
      <div className={PageStyles.main__description}>
        Book a Tony airways flight with ease, just with a few clicks.
      </div>

      <div className={PageStyles.main__content}>
        <div className={styles.content}>
          <div className={styles.content__header}>
            <div className={styles.content__header__tabs}>
              <div
                className={cx(
                  styles.content__header__tabs__tab,
                  tabIndex === 0 && styles.content__header__tabs__tab__active
                )}
                onClick={() => {
                  setTabIndex(0);
                }}
              >
                <div className={styles.content__header__tabs__tab__text}>
                  One Way
                </div>
              </div>
              <div
                className={cx(
                  styles.content__header__tabs__tab,
                  tabIndex === 1 && styles.content__header__tabs__tab__active
                )}
                onClick={() => {
                  setTabIndex(1);
                }}
              >
                <div className={styles.content__header__tabs__tab__text}>
                  Round Trip
                </div>
              </div>
            </div>
          </div>

          <div className={styles.content__body}>
            <div className={styles.content__body__places}>
              <div className={styles.content__body__places__place}>
                <TextField />
              </div>
              <div className={styles.content__body__places__circle}>
                <div className={styles.content__body__places__circle__icon}>
                  <svg
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5 5.49998L16.8333 0.833313V4.33331H8.66667V6.66665H16.8333V10.1666M5.16667 7.83331L0.5 12.5L5.16667 17.1666V13.6666H13.3333V11.3333H5.16667V7.83331Z"
                      fill="#838383"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.content__body__places__place}>
                <TextField placeholder={"Departure City"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
