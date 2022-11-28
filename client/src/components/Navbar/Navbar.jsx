import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ setUser }) {
  const handleLogout = () => {
    fetch('http://localhost:3001/logout', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === 200) { setUser(null); }
      });
  };

  return (
    <>
      <Link style={{ margin: '10px' }} to="/game">Game</Link>
      {/* <Link style={{ margin: '10px' }} to="/reg">Registration</Link>
      <Link style={{ margin: '10px' }} to="/auth">Authorization</Link>
      <Link style={{ margin: '10px' }} to="/profile">Profile</Link>
      <Link style={{ margin: '10px' }} to="/stats">Top stats</Link> */}
      <button onClick={handleLogout} type="button">Logout</button>
    </>
  );
}