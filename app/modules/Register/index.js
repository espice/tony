import Image from 'next/image';
import PrimaryButton from '../../components/Button/Primary';
import TextButton from '../../components/Button/Text';
import styles from './index.module.scss';
import Textfield from '../../components/Textfield';
import { useState } from 'react';
import axios from '../../utils/axios';
import useSession from '../../utils/hooks/useSession';
import TextField from '../../components/Textfield';

export default function Content() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [weight, setWeight] = useState('');
  const [userBday, setUserBday] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const { updateUser } = useSession();

  const [registering, setRegistering] = useState(false);

  const generateRandomNum = () => {
    let num1 = Math.floor(Math.random() * 10).toString();
    let num2 = Math.floor(Math.random() * 10).toString();
    let num3 = Math.floor(Math.random() * 10).toString();
    let num4 = Math.floor(Math.random() * 10).toString();
    let num = num1 + num2 + num3 + num4;
    return num;
  };
  const [num, setNum] = useState(generateRandomNum());
  console.log(pageNum);
  if (pageNum == 1) {
    return (
      <div className={styles.content}>
        <div className={styles.content__container}>
          <h1 className={styles.content__container__heading}>Register</h1>

          <h2 className={styles.content__container__placeholder2}>
            Your{' '}
            <span className={styles.content__container__placeholder__blue}>
              Name
            </span>{' '}
          </h2>
          <Textfield
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type={'text'}
            placeholder={'Your Name'}
            className={styles.content__container__input}
          ></Textfield>
          <div style={{ minHeight: '20px' }}></div>
          <h2 className={styles.content__container__placeholder2}>
            Your{' '}
            <span className={styles.content__container__placeholder__blue}>
              Email
            </span>{' '}
          </h2>
          <Textfield
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type={'email'}
            placeholder={'Your Email'}
            className={styles.content__container__input}
          ></Textfield>
          <h2 className={styles.content__container__placeholder}>
            Create a{' '}
            <span className={styles.content__container__placeholder__blue}>
              Password
            </span>{' '}
          </h2>
          <Textfield
            value={userPass}
            onChange={(e) => {
              setUserPass(e.target.value);
            }}
            type={'password'}
            placeholder={'Your Password'}
            className={styles.content__container__input}
          ></Textfield>
          <PrimaryButton
            className={styles.content__container__button}
            onClick={() => {
              setPageNum(2), console.log(pageNum);
            }}
          >
            Continue
          </PrimaryButton>
        </div>
      </div>
    );
  } else if (pageNum == 2) {
    return (
      <div className={styles.content}>
        <div className={styles.content__container}>
          <h1 className={styles.content__container__heading}>
            Just one more thing...{' '}
          </h1>
          <h2 className={styles.content__container__placeholder2}>
            Your{' '}
            <span className={styles.content__container__placeholder__blue}>
              Weight
            </span>{' '}
          </h2>
          <TextField
            num={num}
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            type={'text'}
            placeholder={'Your Weight (kg)'}
            className={styles.content__container__input}
          ></TextField>
          <h2 className={styles.content__container__placeholder}>
            Your{' '}
            <span className={styles.content__container__placeholder__blue}>
              Birthday
            </span>{' '}
          </h2>
          <Textfield
            value={userBday}
            onChange={(e) => {
              setUserBday(e.target.value);
            }}
            type={'date'}
            placeholder={'Your Password'}
            className={styles.content__container__input}
          ></Textfield>
          <PrimaryButton
            className={styles.content__container__button}
            onClick={async () => {
              setRegistering(true);
              const { data } = await axios.post('/auth/register', {
                name: userName,
                email: email,
                password: userPass,
                dob: userBday,
                weight: weight,
              });

              if (data.success) {
                updateUser();
                return (window.location.href = '/diagnosis');
              }
            }}
            loading={registering}
          >
            Register
          </PrimaryButton>
        </div>
      </div>
    );
  }
}
