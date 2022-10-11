import Image from 'next/image';
import PrimaryButton from '../../components/Button/Primary';
import styles from './index.module.scss';
import Textfield from '../../components/Textfield';
import { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import Head from 'next/head';
import useSession from '../../utils/hooks/useSession';

import PageStyles from '../../styles/page.module.scss';
import TextField from '../../components/Textfield';
import TextButton from '../../components/Button/Text';
import Loader from '../../components/Button/Loader';

export default function Content() {
  const { user, error, loading } = useSession();
  const [coords, setCoords] = useState(null);

  const getCoords = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords(position.coords);
        initMap();
      });
    }
  };
  const initMap = () => {
    if (!coords) return;

    //get nearby hospitals from current location using places api
    let map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: coords.latitude, lng: coords.longitude },
      
    })
  };

  useEffect(() => {
    getCoords();
  });

  if (user)
    return (
      <>
        <Head>
          <script
            async
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfaU2uNi_We_fFHZp2WzpPA0mJMQdBnok&libraries=places"
            defer
          ></script>
        </Head>
        <div className={PageStyles.main}>
          <div className={PageStyles.main__header}>
            <div className={PageStyles.main__header__title}>Facilities</div>
            <div className={styles.main__header__search}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#696969"
                  fill-rule="evenodd"
                  d="m16.325 14.899l5.38 5.38a1.008 1.008 0 0 1-1.427 1.426l-5.38-5.38a8 8 0 1 1 1.426-1.426ZM10 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"
                />
              </svg>
              <input
                placeholder={'Search for hospitals, doctors and more..'}
                className={styles.main__header__search__input}
              />
            </div>
          </div>

          <div className={PageStyles.main__description}>
            Get access to top hospitals, doctors, therapists, vaccination
            drives, awareness camps and more.
          </div>

          <div className={PageStyles.main__section}>
            <div className={PageStyles.main__section__header}>
              <div className={PageStyles.main__section__header__title}>
                Hospitals
              </div>
            </div>
          </div>
        </div>
      </>
    );

  return <Loader center={true} />;
}
