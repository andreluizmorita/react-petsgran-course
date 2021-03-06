import React from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';

import { ReactComponent as Dogs } from '../../assets/dogs.svg';

import styles from './styles.module.css';
import { Button } from '../Common';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link to="/conta" className={styles.login}>
            {data.nome}
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;