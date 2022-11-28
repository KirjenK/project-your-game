import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ user, setUser }) {
  const handleLogout = () => {
    fetch('http://localhost:3001/logout', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === 'success') { setUser(null); }
      });
  };

  const notAuthNav = () => (
    <>
      <Link style={{ margin: '10px' }} to="/reg">Registration</Link>
      <Link style={{ margin: '10px' }} to="/auth">Authorization</Link>
    </>
  );

  const authNav = () => (
    <>
    <Link style={{ margin: '10px' }} to="/game">Game</Link>
    <Link style={{ margin: '10px' }} to="/profile">Profile</Link>
    <Link style={{ margin: '10px' }} to="/stats">Top stats</Link>
    <button onClick={handleLogout} type="button">Logout</button>
    </>

  );

  return (
    <div style={{ textAlign: 'center' }}>
      {user ? authNav() : notAuthNav()}
    </div>
  );
}
