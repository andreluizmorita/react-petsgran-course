import React from 'react';

import { Link } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';

import { Input, Button }from '../../components/Common';
import Error from '../../components/Helper/Error';
import useForm from '../../hooks/useForm';

import styles from './LoginForm.module.css';
import stylesBtn from '../../components/Common/Button/styles.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animate-left">
      <h1 className="title">Login</h1>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <Input 
          label="Nome"
          type="text"
          placeholder="Digite seu nome"
          {...username}
        />
        <Input 
          label="Senha" 
          type="text" 
          placeholder="Digite sua senha"
          {...password}
        />

        {
          loading 
            ? <Button disabled type="button">Carregando...</Button> 
            : <Button type="submit">Entrar</Button>
        }
        <Error error={error} />
      </form>

      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitulo}>Cadastre-se</h2>
        <p>Ainda não possui conta?</p>

        <Link
          className={stylesBtn.button} 
          to="/login/criar">
            Cadastro
        </Link>
      </div>

      
    </section>
  );
}

export default LoginForm;