import React from 'react';

import styles from './PhotoContent.module.css';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>

      <div className={styles.details}>
        <div>
          <p>
            <Link to={`/perfil/${photo.author}`}>
              @{photo.author}
              <span className={styles.visualizacoes}>
                {photo.acessos}
              </span>
            </Link>
          </p>
          
          <h1 className="title">
            <Link to={`/fotos/${photo.id}`}>
              {photo.title}
            </Link>
          </h1>

          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} ano{photo.idade > 0 && 's'}</li>
          </ul>
        </div>
      </div>

      <PhotoComments id={photo.id} comment={comments} />

    </div>
  );
};

export default PhotoContent;