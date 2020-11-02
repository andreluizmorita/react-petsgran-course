import React from 'react';

import Feed from '../../components/Feed';
import Head from '../../components/Helper/Head';

import './styles.css';

const Home = () => {
  return (
    <section className="container main-container">
      <Head
        title="Fotos"
        description="Home do site Dogs, com o feed de fotos"
      />
      <Feed />
    </section>
  );
}

export default Home;