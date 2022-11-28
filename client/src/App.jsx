
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Game from './components/Game/Game';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();

    fetch('http://localhost:3001', {
      credentials: 'include',
      signal: abortController.signal,
    })
      .then((res) => res.json)
      .then((res) => {
        console.log(res);
        setUser(res.user);
      });

    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <>
      <Navbar setUser={setUser} />
      <Routes>

        <Route path="/game" element={<Game user={user} setUser={setUser} />} />
        {/* <Route path="/reg" />
        <Route path="/auth" />
        <Route path="/profile" />
        <Route path="/stats" /> */}

      </Routes>
    </>
  );
}

export default App;
