import React from 'react';

import useForm from '../../hooks/useForm';

import { Input, Button, Error } from '../../components/Common';
import { USER_POST } from '../../services/api';
import { UserContext } from '../../context/UserContext';
import useFetch from '../../hooks/useFetch';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  const handleSubmit = React.useCallback(async (e) => {
    e.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    });

    const { response, json } = await request(url, options);
    
    if (response.ok) userLogin(username.value, password.value);
  }, [username, email, password, userLogin]);

  return (
    <section className="animate-left">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input 
          name="username"
          label="Usuário"
          type="text"
          {...username}
        />
        <Input 
          name="email"
          label="E-mail"
          type="email"
          {...email}
        />
        <Input 
          name="password"
          label="Senha"
          type="password"
          {...password}
        />
        {
          loading 
            ? <Button type="button" disabled>Cadastrar</Button>
            : <Button type="submit">Cadastrar</Button>
        }
        <Error error={error}/>
      </form>
      
    </section>
  );
}

export default LoginCreate;