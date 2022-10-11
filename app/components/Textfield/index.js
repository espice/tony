import styles from './index.module.scss';
import { useState } from 'react';

import classnames from 'classnames/bind';

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
      <input
        className={cx('input', className)}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        type={type}
      />
    );
  }

  return (
    <textarea
      className={cx('textarea', className)}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
  );
}
