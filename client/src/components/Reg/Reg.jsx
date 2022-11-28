import React, { useState } from 'react';
import './reg.css';

export default function Auth({ setUser }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [answer, setAnswer] = useState(null);
  const [formName, setFormName] = useState('regFormOne');

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === 'пароли не совпадают') {
          setForm({
            password: '',
            repeatPassword: '',
          });
          setAnswer(res.message);
        } else if (res.message === 'Пожалуйста заполните все поля') {
          setAnswer(res.message);
        } else if (res.message === 'пользователь уже существует') {
          setForm({
            name: '',
          });
          setAnswer(res.message);
        } else if (res.message === 'пароль должен быть больше трех символов') {
          setForm({
            password: '',
            repeatPassword: '',
          });
          setAnswer(res.message);
        } else if (res.message === `${res.username}, поздравляем с успешной регистрацией !`) {
          setUser({ username: res.username, userId: res.userId });
          setAnswer(res.message);
          setFormName('regFormTwo');
        }
      });
  };

  return (
    <div className="authForm">
      <form className={formName} onSubmit={handleSubmit}>
      <div>
      <label>Name</label>
      <input type="text" value={form.name} name="name" onChange={handleInput} />
      </div>
      <div>
      <label>Email address</label>
      <input type="email" value={form.email} name="email" onChange={handleInput} />
      </div>
      <div>
      <label>Password</label>
      <input type="password" value={form.password} name="password" onChange={handleInput} />
      </div>
      <div>
      <label>Repeat password</label>
      <input type="password" value={form.repeatPassword} name="repeatPassword" onChange={handleInput} />
      </div>

      <button type="submit">Submit</button>
      </form>
      <div>
        {answer}
      </div>
    </div>
  );
}
