/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Profile.css';

export default function Profile({ user }) {
  const [stat, setStat] = useState([]);
  const [bestResult, setBestResult] = useState({});

  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.globalStore);

  useEffect(() => {
    const abortController = new AbortController();

    fetch('http://localhost:3001/profile/:id', {
      credentials: 'include',
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: 'SET_LOADING', payload: false });
        console.log(res);
        setStat(res.profileStats);
        setBestResult(res.bestResult);
      })
      .catch(console.log);
  }, []);

  const gamesPlayed = stat.length;

  return (
    loading ? (
      <div className="spinner-container">
        <img className="spinner" src="https://i.pinimg.com/originals/e2/eb/9e/e2eb9e845ff87fb8fac15f72359efb10.gif" alt="spinner" />
      </div>
    )
      : (
<div className="main">
    <h2> Профиль </h2>
    {gamesPlayed && (
<h3>
      Всего было сыгранно {gamesPlayed}
</h3>
    )}
    {bestResult.result && (
<h3>
      Лучший результат {bestResult.result} очков было набрано :з
</h3>
    )}
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
      )
  );
}
