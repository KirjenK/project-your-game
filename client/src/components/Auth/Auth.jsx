import React, { useState } from 'react';
import './auth.css';

export default function Auth() {
  const [user, setUser] = useState(null);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

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
      .then((res) => setUser(res));
  };
  console.log(user);

  return (
    <div className="authForm">
    <form onSubmit={handleSubmit}>
    <div>
    <label>Email address</label>
    <input type="email" value={form.email} name="email" onChange={handleInput} />
    </div>
    <div>
    <label>Password</label>
    <input type="password" value={form.password} name="password" onChange={handleInput} />
    </div>
    <button type="submit">Submit</button>
    </form>
    </div>
  );
}
