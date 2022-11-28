/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';

export default function Stats() {
  const [stat, setStat] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch('http://localhost:3001/stat', {
      credentials: 'include',
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        // dispatch({ type: 'GET_CANDIDATES', payload: data });
        setStat(res);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      <h2> Stat </h2>
      {stat.map((el) => (
        <div key={el.id}>
          <div>
          Id пользователя: {el.UserId}
          </div>
          <div>
            Счёт пользователя: {el.result}
          </div>
        </div>
      ))}
    </div>
  );
}
