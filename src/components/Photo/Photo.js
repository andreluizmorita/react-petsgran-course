import React from 'react';
import { useParams } from 'react-router-dom';

import PhotoContent from './PhotoContent';

import Error from '../Helper/Error';
import Loading from '../Helper/Loading';

import { PHOTO_GET } from '../../services/api';
import useFetch from '../../hooks/useFetch';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request} = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);

    request(url, options);
    
  }, [request, id]);
  
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;