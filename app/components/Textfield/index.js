import styles from "./index.module.scss";
import { useState } from "react";

import classnames from "classnames/bind";

const cx = classnames.bind(styles);
export default function TextField({
  placeholder,
  className,
  disabled,
  value,
  onChange,
  type,
  textarea,
}) {
  const [passOpen, setPassOpen] = useState(false);

  if (!textarea) {
    return (
      <div className={styles.container}>
        <div className={styles.container__icon}>
          <svg
            width="16"
            height="16"
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
        </div>
        <input
          className={cx("input", className)}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          type={type}
        />
      </div>
    );
  }

  return (
    <textarea
      className={cx("textarea", className)}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
  );
}
