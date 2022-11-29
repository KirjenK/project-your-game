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
  const [result, setResult] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch('http://localhost:3001/game', {
      credentials: 'include',
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        setResult(res.currentResult);
        setTheme(res.allThemes);
        setTimeout(() => {
          const btn = document.querySelectorAll('.originalBtn');
          if (res.btnDel) {
            res.btnDel.map((el) => btn[el - 1].setAttribute('disabled', 'true'));
            res.btnDel.map((el) => btn[el - 1].classList.remove('btn'));
            res.btnDel.map((el) => btn[el - 1].classList.add('disableBtn'));
          }
        }, 100);
      });
  }, []);

  const onClick = (e) => {
    setMainDiv('containerTwo');

    // e.target.textContent - Сколько стоит вопрос

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
        setQ(res.question);
        const btn = document.querySelectorAll('.originalBtn');
        res?.btnDel.map((el) => btn[el - 1].setAttribute('disabled', 'true'));
        res?.btnDel.map((el) => btn[el - 1].classList.remove('btn'));
        res?.btnDel.map((el) => btn[el - 1].classList.add('disableBtn'));
      });
  };

  const changeInput = (e) => {
    setAnswerInput(e.target.value);
  };

  const showAnswer = () => {
    if (q?.answer === answerInput) {
      setPOne('showP');
      const titleEl = document?.querySelector('.qTitle');
      const title = titleEl.textContent;
      fetch('http://localhost:3001/result', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, answer: true }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log('===>>> 👉👉👉 file: Game.jsx 👉👉👉 line 78 👉👉👉 res', res);
          setResult(res.currentResult);
        });
    } else {
      setPTwo('showP');
      const titleEl = document?.querySelector('.qTitle');
      const title = titleEl.textContent;
      fetch('http://localhost:3001/result', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, answer: false }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log('===>>> 👉👉👉 file: Game.jsx 👉👉👉 line 95 👉👉👉 res', res);
          setResult(res.currentResult);
        });
    }
  };

  const goToTable = () => {
    setMainDiv('container');
    setNewDiv('containerTwo');
    setAnswerInput('');
    setPTwo('containerTwo');
    setPOne('containerTwo');
    if (result.length === 25) {
      const curResult = result.reduce((acc, el) => acc + el, 0);
      fetch('http://localhost:3001/addResultToBase', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ curResult }),
      });
    }
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
           <button id={qs.id} className="btn originalBtn" type="button" onClick={onClick}>{qs.price}</button>
          </div>
          ))}
        </div>
        </div>
      ))}
    </div>
    <div className={newDiv}>
      <div className="qTitle">{q?.title}</div>
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
         <h3> Current stats: {result?.reduce((acc, el) => acc + el, 0)}</h3>
    </div>
    </>
  );
}
