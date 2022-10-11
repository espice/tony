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
import getInitials from '../../utils/initials';

export default function Content() {
  const { user, error, loading } = useSession();
  const [name, setName] = useState(user.name.split(' ')[0]);
  const [email, setEmail] = useState(user.email);
  const [surname, setSurname] = useState(user.name.split(' ')[1]);
  const [dob, setDob] = useState(user.dob);
  const [weight, setWeight] = useState(user.weight);

  if (user)
    return (
      <div className={PageStyles.main}>
        <div className={PageStyles.main__header}>
          <div className={PageStyles.main__header__title}>Profile</div>
        </div>

        <div className={styles.profile}>
          <div className={styles.profile__avatar}>{getInitials(user.name)}</div>
          <div className={styles.profile__fields}>
            <div className={styles.profile__fields__name}>
              <TextField
                className={styles.textfield}
                placeholder={'Name'}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                placeholder={'Surname'}
                value={surname}
                className={styles.textfield}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className={styles.profile__fields__name}>
              <TextField
                className={styles.textfield}
                placeholder={'Date of birth'}
                value={dob}
                type={'date'}
                onChange={(e) => setDob(e.target.value)}
              />
              <TextField
                placeholder={'Weight'}
                value={weight}
                className={styles.textfield}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <TextField
              className={styles.textfield}
              placeholder={'Email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
}
