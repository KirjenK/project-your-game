import React, { useState } from 'react';
import './reg.css';

export default function Auth({ setUser }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

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
      .then((res) => setUser(res));
  };

  return (
    <div className="authForm">
    <form onSubmit={handleSubmit}>
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
    </div>
  );
}
