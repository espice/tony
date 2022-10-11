import Image from 'next/image';
import PrimaryButton from '../../components/Button/Primary';
import styles from './index.module.scss';
import Textfield from '../../components/Textfield';
import { useState } from 'react';
import axios from '../../utils/axios';

import { useRouter } from 'next/router';
import PageStyles from '../../styles/page.module.scss';
import TextField from '../../components/Textfield';
import TextButton from '../../components/Button/Text';

export default function Content() {
  const router = useRouter();
  const [diagnosis, setDiagnosis] = useState(null);
  const [skipping, setSkipping] = useState(false);
  const [loading, setLoading] = useState(false);
  const [symptoms, setSymptoms] = useState('');
  const [details, setDetails] = useState('');

  const getDiagnosis = async () => {
    setLoading(true);
    const { data } = await axios.post('/diagnosis', {
      symptoms,
      details,
    });
    console.log(data);
    setDiagnosis(data.disease.trim());
    setLoading(false);
  };

  const skip = () => {
    setSkipping(true);
  };

  return (
    <div className={PageStyles.main}>
      <div className={PageStyles.main__header}>
        <div className={PageStyles.main__header__title}>Onboarding</div>
      </div>
      <div className={PageStyles.main__description}>
        {!diagnosis ? (
          <>
            Before you get started with Heka, we’d like you to answer a few
            questions. Although it’s optional, we believe a self-diagnosis will
            improve your experience significantly.
          </>
        ) : (
          <>
            According to the form you just submitted, Heka predicts that you
            have{' '}
            <span
              style={{
                color: '#151515',
                fontWeight: '700',
              }}
            >
              {' '}
              {diagnosis}
            </span>
            . You don’t need to panic - you should first consult a doctor and
            get your tests done.
          </>
        )}
      </div>

      {!diagnosis ? (
        <>
          <div className={PageStyles.main__section}>
            <div className={PageStyles.main__section__header}>
              <div className={PageStyles.main__section__header__title}>
                Symptoms
              </div>
            </div>

            <div className={PageStyles.main__section__content}>
              <TextField
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder={
                  'Have you been experiencing any symptoms like excessive weight loss, headaches etc. lately?'
                }
                className={styles.textfield}
              />
            </div>
          </div>

          <div className={PageStyles.main__section}>
            <div className={PageStyles.main__section__header}>
              <div className={PageStyles.main__section__header__title}>
                Details
              </div>
            </div>

            <div className={PageStyles.main__section__content}>
              <TextField
                placeholder={
                  'Would you like to share any necessary details regarding your illness?'
                }
                className={styles.textarea}
                textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>
          </div>
        </>
      ) : null}

      <div className={PageStyles.main__actions}>
        {!diagnosis ? (
          <>
            <TextButton
              onClick={() => {
                skip();
              }}
              disabled={skipping}
              loading={skipping}
            >
              Skip
            </TextButton>
            <PrimaryButton
              onClick={() => {
                getDiagnosis();
              }}
              disabled={loading}
              loading={loading}
            >
              Proceed
            </PrimaryButton>
          </>
        ) : (
          <PrimaryButton
            onClick={() => {
              router.push('/');
            }}
          >
            Monitor your {diagnosis}
          </PrimaryButton>
        )}
      </div>
    </div>
  );
}
