/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Stat.css';

export default function Stats() {
  const [stat, setStat] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.globalStore);

  useEffect(() => {
    const abortController = new AbortController();

    fetch('http://localhost:3001/stat', {
      credentials: 'include',
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: 'SET_LOADING', payload: false });
        console.log(res);
        setStat(res);
      })
      .catch(console.log);
  }, []);

  return (
    loading ? (
      <div className="spinner-container">
        <img className="spinner" src="https://i.pinimg.com/originals/e2/eb/9e/e2eb9e845ff87fb8fac15f72359efb10.gif" alt="spinner" />
      </div>
    )
      : (
<div className="main">
      <h2> Статистика </h2>
      {stat.map((el) => (
        <div key={el.id} className="secondDiv">
          <div className="Email">
          Почта пользователя: {el.User.email}
          </div>
          <div className="Name">
          Имя пользователя: {el.User.name}
          </div>
          <div className="Result">
            Счёт пользователя: {el.result}
          </div>
        </div>
      ))}
</div>
      )
  );
}
