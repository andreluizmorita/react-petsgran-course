import React from 'react';

import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';

import Error from '../../components/Helper/Error';

import { PASSWORD_LOST } from '../../services/api';


const LoginPasswordForgot = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();
  const { url, options } = PASSWORD_LOST({
    login: login.value,
    url: window.location.href.replace('perdeu', 'resetar')
  });

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { json } = await request(url, options);
    }
  }

  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ): (
        <form onSubmit={handleSubmit}>
          <Input  
            label="E-mail / Usuário"
            type="text"
            name="login"
            {...login}
          />

          <Button disabled={loading}>
            {loading ? 'Carregando' : 'Resetar senha'}
          </Button>

          <Error error={error} />
        </form>
      )}
    </section>
  );
}

export default LoginPasswordForgot;