import React from 'react';

import styles from './styles.module.css';

const Input = ({ label, value, onChange, onBlur, error, validate, setValue, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={label} className={styles.label}>
        {label}
        <input
          name={label}
          value={value}
          className={styles.input}
          onChange={onChange}
          onBlur={onBlur}
          {...props}
        />
        {error && <p className={styles.error}>{error}</p>}
      </label>
    </div>

  );
}

export default Input;