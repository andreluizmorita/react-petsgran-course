import React from 'react';

import useFetch from '../../hooks/useFetch';
import { PHOTO_DELETE } from '../../services/api';
import styles from './PhotoDelete.module.css';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick(event) {
    const confirm = window.confirm('Tem certeza que deseja deletar?');

    if (confirm) {
      const { url, options } = PHOTO_DELETE;
      const { response } = await request(url, options);
  
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      <button
        onClick={() => loading ? null : handleClick()}
        className={styles.delete}
        disabled={loading}
      >
        Deletar
      </button>
    </>
  );
};

export default PhotoDelete;