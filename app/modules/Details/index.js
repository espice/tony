import styles from "./index.module.scss";
import PageStyles from "../../styles/page.module.scss";
import Layout from "../../components/Layout";
import Image from "next/image";
import TextButton from "../../components/Button/Text";

const Details = () => {
    return (
        <div className={PageStyles.main}>
            <div style={{marginRight: "auto", display: "flex", alignItems: "center"}}>
                <h3 className={styles.span}>Round Trip &nbsp; &nbsp;  3</h3>
                <svg style={{width:"24px",height:"24px", marginLeft :"8px", color: "#2E3742"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,5A3.5,3.5 0 0,0 8.5,8.5A3.5,3.5 0 0,0 12,12A3.5,3.5 0 0,0 15.5,8.5A3.5,3.5 0 0,0 12,5M12,7A1.5,1.5 0 0,1 13.5,8.5A1.5,1.5 0 0,1 12,10A1.5,1.5 0 0,1 10.5,8.5A1.5,1.5 0 0,1 12,7M5.5,8A2.5,2.5 0 0,0 3,10.5C3,11.44 3.53,12.25 4.29,12.68C4.65,12.88 5.06,13 5.5,13C5.94,13 6.35,12.88 6.71,12.68C7.08,12.47 7.39,12.17 7.62,11.81C6.89,10.86 6.5,9.7 6.5,8.5C6.5,8.41 6.5,8.31 6.5,8.22C6.2,8.08 5.86,8 5.5,8M18.5,8C18.14,8 17.8,8.08 17.5,8.22C17.5,8.31 17.5,8.41 17.5,8.5C17.5,9.7 17.11,10.86 16.38,11.81C16.5,12 16.63,12.15 16.78,12.3C16.94,12.45 17.1,12.58 17.29,12.68C17.65,12.88 18.06,13 18.5,13C18.94,13 19.35,12.88 19.71,12.68C20.47,12.25 21,11.44 21,10.5A2.5,2.5 0 0,0 18.5,8M12,14C9.66,14 5,15.17 5,17.5V19H19V17.5C19,15.17 14.34,14 12,14M4.71,14.55C2.78,14.78 0,15.76 0,17.5V19H3V17.07C3,16.06 3.69,15.22 4.71,14.55M19.29,14.55C20.31,15.22 21,16.06 21,17.07V19H24V17.5C24,15.76 21.22,14.78 19.29,14.55M12,16C13.53,16 15.24,16.5 16.23,17H7.77C8.76,16.5 10.47,16 12,16Z" />
                </svg>
           </div>
           <h1 className={styles.heading}>DELHI 
            <svg
                        width="40"
                        height="40"
                        viewBox="0 0 22 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M21.5 5.49998L16.8333 0.833313V4.33331H8.66667V6.66665H16.8333V10.1666M5.16667 7.83331L0.5 12.5L5.16667 17.1666V13.6666H13.3333V11.3333H5.16667V7.83331Z"
                        fill="#2E3742"
                        />
                </svg> MUMBAI
            </h1>
            <div className={styles.subheading}>
                SELECTED FLIGHTS
                <div className={styles.subheading__line}></div>
            </div>
            <div className={styles.flights}>
                <div className={styles.flight}>
                    <div className={styles.flight__image}>
                        <Image style={{}} src={"/logo.svg"} height={"56px"} width={"56px"}></Image>
                    </div>
                    <div className={styles.flight__texts}>
                        <h3 className={styles.flight__texts__dates}>
                            Mon, Oct 25 2022 &nbsp; &nbsp; &nbsp; &nbsp; 05:00 to 07:15
                        </h3>
                        <h3 className={styles.flight__texts__flights}>
                        Flight 7X49AE · Boeing 737 MAX
                        </h3>
                    </div>
                    <div className={styles.flight__textss}>
                    <h3 className={styles.flight__time}>Non Stop</h3>
                    <h3 className={styles.flight__change}><TextButton>Change Flight</TextButton></h3>
                    </div>
                </div>
                <div className={styles.flight} style={{borderTop: "2px solid #D4D4D4", borderTopLeftRadius: "0px", borderTopRightRadius: "0px"}}>
                    <div className={styles.flight__image}>
                        <Image style={{}} src={"/logo.svg"} height={"56px"} width={"56px"}></Image>
                    </div>
                    <div className={styles.flight__texts}>
                        <h3 className={styles.flight__texts__dates}>
                            Mon, Oct 25 2022 &nbsp; &nbsp; &nbsp; &nbsp; 05:00 to 07:15
                        </h3>
                        <h3 className={styles.flight__texts__flights}>
                        Flight 7X49AE · Boeing 737 MAX
                        </h3>
                    </div>
                    <div className={styles.flight__textss}>
                    <h3 className={styles.flight__time}>Non Stop</h3>
                    <h3 className={styles.flight__change}><TextButton>Change Flight</TextButton></h3>
                    </div>
                </div>
            </div>
            <div className={styles.subheading}>
                BILLING
                <div className={styles.subheading__line}></div>
            </div>
            <div className={styles.flightdetails}>
                <div className={styles.column}>
                    <div className={styles.column__heading}>
                        FLIGHT
                    </div>
                    <div className={styles.column__text}>
                        7X49AC
                    </div>
                </div>

                <div className={styles.column__right}>
                    <div className={styles.column}>
                        <div className={styles.column__heading}>
                            PRICE
                        </div>
                        <div className={styles.column__text}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
    )
}

export default Details;