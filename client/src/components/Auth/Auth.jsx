import React, { useState } from 'react';
import './auth.css';

export default function Auth({ setUser }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [answer, setAnswer] = useState(null);
  const [formName, setFormName] = useState('authFormOne');

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/signin', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === 'неверно введен логин или пароль') {
          setForm({
            email: '',
            password: '',
          });
          setAnswer(res.message);
        } else if (res.message === 'авторизация прошла успешно') {
          setUser({ username: res.username, userId: res.userId });
          setFormName('authFormTwo');
          setAnswer(res.message);
        }
      });
  };

  return (
    <div className="authForm">
      <form className={formName} onSubmit={handleSubmit}>
      <div className="inputForm">
      <label className="labelForm">E-mail address</label>
      <input type="email" value={form.email} name="email" onChange={handleInput} placeholder="enter e-mail ..." required />
      </div>
      <div className="inputForm">
      <label className="labelForm">Password</label>
      <input type="password" value={form.password} name="password" placeholder="enter password ..." onChange={handleInput} required />
      </div>
      <button className="authBtn" type="submit">Submit</button>
      </form>
      <div className="anserAuth">
        {answer}
      </div>
    </div>
  );
}
