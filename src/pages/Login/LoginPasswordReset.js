import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';

import { Button, Input } from '../../components/Common';
import Error from '../../components/Helper/Error';

import { PASSWORD_RESET } from '../../services/api';



import './styles.css';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.localtion.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      });
      
      const { response } = await request (url, options);
  
      if (response.ok) navigate('/login');
    }
  }

  return (
    <div>
      <h1 className="title">Reset a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />

        <Button disabled={loading}>
          {loading ? '' : 'Resetar'}
        </Button>

        <Error error={error} />
      </form>
    </div>
  );
}

export default LoginPasswordReset;