import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordForgot from './LoginPasswordForgot';
import LoginPasswordReset from './LoginPasswordForgot';
import { UserContext } from '../../context/UserContext';

import styles from './Login.module.css';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/conta" />

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="esqueceu" element={<LoginPasswordForgot />} />
          <Route path="alterar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;