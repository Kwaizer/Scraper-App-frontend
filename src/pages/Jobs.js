import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import JobsList from '../components/JobsList/JobsList';

function Jobs() {
  const location = useLocation();
  const site = new URLSearchParams(location.search).get('site') || 'Djinni';

  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch(`/jobs?site=${site}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [site]);

  return (
    <div>
      <JobsList data={data} />
    </div>
  );
}

export default Jobs;
