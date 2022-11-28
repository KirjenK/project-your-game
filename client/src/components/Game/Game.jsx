import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './game.css';

export default function Game() {
  const [theme, setTheme] = useState();
  const [mainDiv, setMainDiv] = useState('container');
  const [newDiv, setNewDiv] = useState('containerTwo');
  const [q, setQ] = useState(null);
  const [pOne, setPOne] = useState('containerTwo');
  const [pTwo, setPTwo] = useState('containerTwo');
  const [answerInput, setAnswerInput] = useState('');
  const [dis, setDis] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    fetch('http://localhost:3001/game', {
      credentials: 'include',
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        setTheme(res);
        setTimeout(() => {
          const btn = document.querySelectorAll('.btn');
          console.log('btn --- >>> ', btn);
          [1, 2, 3].map((el) => btn[el - 1].setAttribute('disabled', 'true'));
        }, 1000);
      });
  }, []);

  const onClick = (e) => {
    setMainDiv('containerTwo');
    // console.log('btn --- >>> ', btn[e.target.id - 1]);
    // btn[e.target.id - 1].setAttribute('disabled', 'true');

    fetch('http://localhost:3001/question', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: e.target.id }),
    })
      .then((res) => res.json())
      .then((res) => {
        setNewDiv('mainDiv');
        setQ(res);
      });
  };

  const changeInput = (e) => {
    console.log('e.target.value --- >>> ', e.target.value);
    setAnswerInput(e.target.value);
  };

  const showAnswer = () => {
    if (q?.answer === answerInput) {
      setPOne('showP');
    } else {
      setPTwo('showP');
    }
  };

  const goToTable = () => {
    setMainDiv('container');
    setNewDiv('containerTwo');
  };

  return (
    <>
    <div className={mainDiv}>
      {theme && theme.map((th) => (
        <div className="card" key={th.id}>
       <div className="themeTitle">{th.title}</div>
        <div className="qst">
          {th.Questions.map((qs) => (
          <div key={qs.id}>
           <button id={qs.id} disabled={dis} className="btn" type="button" onClick={onClick}>{qs.price}</button>
          </div>
          ))}
        </div>
        </div>
      ))}
    </div>
    <div className={newDiv}>
      <div>{q?.title}</div>
      <input type="text" name="answer" value={answerInput} onChange={changeInput} />
      <button type="button" onClick={showAnswer}>Submit</button>
      <p className={pOne}>Ответ верный !</p>
      <button type="button" className={pOne} onClick={goToTable}>Вернуться к таблице</button>
      <p className={pTwo}>
              Твой ответ неверный!
              Правильный ответ: {q?.answer}
      </p>
      <button type="button" className={pTwo} onClick={goToTable}>Вернуться к таблице</button>

    </div>
    <div className="currentsStats">
         <h3> Current stats:</h3>
    </div>
    </>
  );
}
