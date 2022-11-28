import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Game from './components/Game/Game';
import Auth from './components/Auth/Auth';
import Reg from './components/Reg/Reg';
import Stats from './components/Stats/Stats';
import Profile from './components/Profile/Profile';
import ProtectedRouter from './components/ProtectedRouter/ProtectedRouter';

function App() {
  const [user, setUser] = useState(null);
  console.log('===>>> 👉👉👉 file: App.jsx 👉👉👉 line 13 👉👉👉 user', user);
  useEffect(() => {
    const abortController = new AbortController();

    fetch('http://localhost:3001', {
      credentials: 'include',
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('res=>>>>>>>>useffect', res);
        setUser(res);
      });

    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <>
      <Navbar user={user} setUser={setUser} />
  <Routes>

      <Route element={<ProtectedRouter user={user} />}>
        <Route path="/game" element={<Game user={user} setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
        <Route path="/stats" element={<Stats user={user} setUser={setUser} />} />
      </Route>

      <Route element={<ProtectedRouter user={!user} />}>
        <Route path="/reg" element={<Reg user={user} setUser={setUser} />} />
        <Route path="/auth" element={<Auth user={user} setUser={setUser} />} />
      </Route>

  </Routes>
    </>
  );
}

export default App;
