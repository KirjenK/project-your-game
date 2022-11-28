import React, { useState, useEffect } from 'react';
import './game.css';

export default function Game() {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const abortController = new AbortController();
    fetch('http://localhost:3001/game', {
      credentials: 'include',
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTheme(res);
      });
  }, []);

  return (
    <>
    <div className="container">
      {theme && theme.map((th) => (
        <div className="card" key={th.id}>
       <div className="themeTitle">{th.title}</div>
        <div className="qst">
          {th.Questions.map((qs) => (
          <div key={qs.id}>
           <button className="btn" type="button">{qs.price}</button>
          </div>
          ))}
        </div>
        </div>
      ))}
    </div>
    <div className="currentsStats">
         <h3> Current stats:</h3>
    </div>
    </>
  );
}
