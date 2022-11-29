import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ user, setUser }) {
  console.log('===>>> 👉👉👉 file: Navbar.jsx 👉👉👉 line 5 👉👉👉 user', user);
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch('http://localhost:3001/logout', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === 'success') { setUser(null); }
        navigate('/');
      });
  };

  const notAuthNav = () => (
    <>
      {/* <Link style={{ margin: '10px' }} to="/reg">Registration</Link>
      <Link style={{ margin: '10px' }} to="/auth">Authorization</Link> */}
      <Link style={{ margin: '10px' }} to="/reg">Регистрация</Link>
      <Link style={{ margin: '10px' }} to="/auth">Авторизация</Link>
    </>
  );

  const authNav = () => (
    <>
    {/* <Link style={{ margin: '10px' }} to="/game">Game</Link>
    <Link style={{ margin: '10px' }} to="/profile">Profile</Link>
    <Link style={{ margin: '10px' }} to="/stats">Top stats</Link>
    <button onClick={handleLogout} type="button">Logout</button> */}
    <Link style={{ margin: '10px' }} to="/game">Играть</Link>
    <Link style={{ margin: '10px' }} to="/profile">Профиль</Link>
    <Link style={{ margin: '10px' }} to="/stats">Лучшие результаты</Link>
    <button onClick={handleLogout} type="button">Выйти</button>
    </>

  );

  return (
    <div style={{ textAlign: 'center' }}>
      {user ? authNav() : notAuthNav()}
    </div>
  );
}
