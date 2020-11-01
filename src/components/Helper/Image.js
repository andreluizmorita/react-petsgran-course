import React from 'react';
import styles from './Image.module.css';

const Image = ({ alt, ...restProps }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad ({ target }) {
    setTimeout(() => {
      setSkeleton(false);
      target.style.opacity = 1;
    }, 50);
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img
        onLoad={handleLoad}
        className={styles.img}
        alt={alt}
        {...restProps}
      />
    </div>
  );
};

export default Image;