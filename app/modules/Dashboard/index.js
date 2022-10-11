import Image from 'next/image';
import PrimaryButton from '../../components/Button/Primary';
import styles from './index.module.scss';
import Textfield from '../../components/Textfield';
import { useState } from 'react';
import axios from '../../utils/axios';
import useSession from '../../utils/hooks/useSession';

import PageStyles from '../../styles/page.module.scss';
import TextField from '../../components/Textfield';
import TextButton from '../../components/Button/Text';
import Loader from '../../components/Button/Loader';

export default function Content() {
  const { user, error, loading } = useSession();

  if (user)
    return (
      <div className={PageStyles.main}>
        <div className={PageStyles.main__header}>
          <div className={PageStyles.main__header__title}>
            Namaste, {user.name.split(' ')[0]}!
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.container__large}>
            <div className={styles.container__large__header}>
              <div className={styles.container__large__header__title}>
                Glucose Levels
              </div>

              <div className={styles.container__large__header__action}>
                View details
              </div>
            </div>

            <div className={styles.container__large__content}>
              <div className={styles.container__large__content__description}>
                Monitor your glucose levels - you are currently prediabetic.
                These are your glucose levels in the past week, in mg/dl. An
                average blood glucose of around 100 mg/dl is considered healthy.{' '}
              </div>
              <div className={styles.container__large__content__header}>
                <div
                  className={styles.container__large__content__header__title}
                >
                  WEEKLY GLUCOSE LEVELS
                </div>
                <div
                  className={styles.container__large__content__header__action}
                >
                  View details
                </div>
              </div>{' '}
              <div className={styles.container__large__content__graph}>
                <div
                  className={styles.container__large__content__graph__levels}
                >
                  <div
                    className={
                      styles.container__large__content__graph__levels__level
                    }
                  >
                    200
                  </div>

                  <div
                    className={
                      styles.container__large__content__graph__levels__level
                    }
                  >
                    150
                  </div>

                  <div
                    className={
                      styles.container__large__content__graph__levels__level
                    }
                  >
                    100
                  </div>

                  <div
                    className={
                      styles.container__large__content__graph__levels__level
                    }
                  >
                    100
                  </div>

                  <div
                    className={
                      styles.container__large__content__graph__levels__level
                    }
                  >
                    50
                  </div>

                  <div
                    className={
                      styles.container__large__content__graph__levels__level
                    }
                  >
                    0
                  </div>
                </div>
                <div className={styles.container__large__content__graph__data}>
                  <div
                    className={
                      styles.container__large__content__graph__data__rectangle
                    }
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.container__column}>
            <div className={styles.container__column__small}>
              <div className={styles.container__column__small__header}>
                <div className={styles.container__column__small__header__title}>
                  Cholestrol
                </div>

                <div
                  className={styles.container__column__small__header__action}
                >
                  View details
                </div>
              </div>
            </div>

            <div className={styles.container__column__small}>
              <div className={styles.container__column__small__header}>
                <div className={styles.container__column__small__header__title}>
                  Mood
                </div>

                <div
                  className={styles.container__column__small__header__action}
                >
                  View details
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  if (loading) return <Loader center={true} />;

  return <div>Not logged in</div>;
}
