import PrimaryButton from "../Button/Primary";
import TextButton from "../Button/Text";
import styles from "./index.module.scss";
import { useState } from "react";
import Image from "next/image";

import Logo from "../../public/logo.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import useSession from "../../utils/hooks/useSession";
import getInitials from "../../utils/initials";

export default function Header() {
  const { user, error, loading } = useSession();
  const router = useRouter();

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <Image
          src={Logo}
          width={52}
          height={52}
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push("/");
          }}
        />
      </div>
      {user ? <AuthLinks /> : <AccountOptions />}
    </div>
  );
}

const AccountOptions = () => {
  const router = useRouter();

  const [loginLoading, setLoginLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);

  return (
    <div className={styles.accountOptions}>
      <div className={styles.accountOptions__login}>
        <TextButton
          click={() => {
            setLoginLoading(true);
            if (router.pathname === "/login") {
              return setLoginLoading(false);
            }

            router.push("/login");
          }}
          loading={registerLoading ? false : loginLoading}
        >
          Login
        </TextButton>
      </div>
      <div className={styles.accountOptions__getStarted}>
        <PrimaryButton
          click={() => {
            setRegisterLoading(true);
            if (router.pathname === "/") {
              return setRegisterLoading(false);
            }

            router.push("/");
          }}
          loading={loginLoading ? false : registerLoading}
        >
          Book a flight
        </PrimaryButton>
      </div>
    </div>
  );
};

const AuthLinks = () => {
  const router = useRouter();
  const { user, loading } = useSession();

  console.log(user);

  const links = [
    {
      label: "Dashboard",
      href: "/",
      active: router.pathname === "/",
    },
    {
      label: "Facilities",
      href: "/facilities",
      active: router.pathname === "/facilities",
    },
    {
      label: "Insurance",
      href: "/insurance",
      active: router.pathname === "/insurance",
    },
  ];

  return (
    <div className={styles.header__nav}>
      {links.map((link, index) => {
        return (
          <Link href={link.href} key={index}>
            <div
              className={`${styles.header__nav__link} ${
                link.active ? styles.header__nav__link__active : ""
              }`}
            >
              {link.label}
            </div>
          </Link>
        );
      })}
      <div className={styles.header__nav__avatar}>{getInitials(user.name)}</div>
    </div>
  );
};
