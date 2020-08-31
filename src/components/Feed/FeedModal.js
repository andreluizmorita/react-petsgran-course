import React from 'react';

import PhotoContent from '../Photo/PhotoContent';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';

import useFetch from '../../hooks/useFetch';
import { PHOTO_GET } from '../../services/api';


import styles from './FeedModal.module.css';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  React.useEffect(() => {
    async function fetchPhoto() {
      const { url, options } = PHOTO_GET(photo.id);
      await request(url, options);
    }
    fetchPhoto();
  }, [photo, request]);

  return (
    <div className={styles.modal} onClick={setModalPhoto}>
      {error && <Error error={error}/> }
      {loading && <Loading /> }
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;