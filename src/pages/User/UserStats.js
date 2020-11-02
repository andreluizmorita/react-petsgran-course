import React from 'react';

import Head from '../../components/Helper/Head';
import Loading from '../../components/Helper/Loading';
import Error from '../../components/Helper/Error';

import useFetch from '../../hooks/useFetch';

import UserStatsGraphs from './UserStatsGraphs';

import { STATS_GET } from '../../services/api';

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};

export default UserStats;
