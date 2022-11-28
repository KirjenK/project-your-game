import React, { useState, useEffect } from 'react';
import './Profile.css';

export default function Profile({ user }) {
  const [stat, setStat] = useState([]);
  const [bestResult, setBestResult] = useState({});

  useEffect(() => {
    const abortController = new AbortController();

    fetch('http://localhost:3001/profile', {
      credentials: 'include',
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        // dispatch({ type: 'GET_CANDIDATES', payload: data });
        console.log(res);
        setStat(res.profileStats);
        setBestResult(res.bestResult);
      })
      .catch(console.log);
  }, []);

  const gamesPlayed = stat.length;

  console.log(bestResult);
  return (
  <div className="main">
    <h2> Профиль </h2>
    <h3>
      Всего было сыгрранно
      {' '}
      {gamesPlayed}
    </h3>
    <h3>
{' '}
Лучший результат
{' '}
{bestResult.result}
{' '}
очков было набрано
    </h3>
    {stat.map((el) => (
      <div key={el.id} className="secondDiv">
        <div className="User">
          Id игры:
          {' '}
          {el.id}
        </div>
        <div className="Result">
          Счёт пользователя:
          {' '}
          {el.result}
        </div>
      </div>
    ))}
  </div>
  );
}
