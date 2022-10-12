import Image from 'next/image';
import PrimaryButton from '../../components/Button/Primary';
import styles from './index.module.scss';
import Textfield from '../../components/Textfield';
import { useState } from 'react';
import axios from '../../utils/axios';
import useSession from '../../utils/hooks/useSession';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import PageStyles from '../../styles/page.module.scss';
import TextField from '../../components/Textfield';
import TextButton from '../../components/Button/Text';
import Loader from '../../components/Button/Loader';

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

            <div className={styles.content__header__passengers}>Passengers</div>
          </div>

          <div className={styles.content__body}>
            <div className={styles.content__body__places}>
              <div className={styles.content__body__places__place}>
                <TextField
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="10"
                        stroke="#2E3742"
                        stroke-width="4"
                      />
                    </svg>
                  }
                  placeholder="Departure City"
                />
              </div>
              <div className={styles.content__body__places__circle}>
                <div className={styles.content__body__places__circle__icon}>
                  <svg
                    width="18"
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
                <TextField
                  placeholder={'Destination City'}
                  icon={
                    <svg
                      width="18"
                      height="24"
                      viewBox="0 0 18 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.00001 11.4166C8.22646 11.4166 7.4846 11.1094 6.93762 10.5624C6.39063 10.0154 6.08334 9.27353 6.08334 8.49998C6.08334 7.72643 6.39063 6.98457 6.93762 6.43759C7.4846 5.8906 8.22646 5.58331 9.00001 5.58331C9.77356 5.58331 10.5154 5.8906 11.0624 6.43759C11.6094 6.98457 11.9167 7.72643 11.9167 8.49998C11.9167 8.883 11.8412 9.26227 11.6947 9.61614C11.5481 9.97001 11.3332 10.2915 11.0624 10.5624C10.7916 10.8332 10.47 11.0481 10.1162 11.1946C9.76231 11.3412 9.38303 11.4166 9.00001 11.4166ZM9.00001 0.333313C6.83408 0.333313 4.75685 1.19373 3.2253 2.72527C1.69376 4.25682 0.833344 6.33405 0.833344 8.49998C0.833344 14.625 9.00001 23.6666 9.00001 23.6666C9.00001 23.6666 17.1667 14.625 17.1667 8.49998C17.1667 6.33405 16.3063 4.25682 14.7747 2.72527C13.2432 1.19373 11.1659 0.333313 9.00001 0.333313Z"
                        fill="#2E3742"
                      />
                    </svg>
                  }
                />
              </div>
            </div>
            <div className={styles.content__body__dates} />
          </div>
        </div>
      </div>
    </div>
  );
}
