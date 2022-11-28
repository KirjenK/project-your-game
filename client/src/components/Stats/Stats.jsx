import React, { useEffect } from 'react';

function Stats() {
  // useEffect(() => {
  //   const abortController = new AbortController();

  //   fetch('http://localhost:3001/stat', {
  //     credentials: 'include',
  //     signal: abortController.signal,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       dispatch({ type: 'GET_CANDIDATES', payload: data });
  //     })
  //     .catch(console.log);

  //   return () => {
  //     abortController.abort();
  //   };
  // }, []);
  return (
    <h3> Stats </h3>
  );
}

export default Stats;
