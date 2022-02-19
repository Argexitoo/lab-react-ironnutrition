import { useState } from 'react';
import React from 'react';

function AddFood({ onAdd }) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: 0,
  });

  const handleForm = (e) => {
    e.persist();
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault()
    onAdd(form);
    setForm({
      name: '',
      image: '',
      calories: 0,
    });
  };

  return (
    <>
    <form onSubmit={handleClick}>
      <input
        name="name"
        type="text"
        value={form.name}
        onChange={handleForm}
        placeholder="name"
      />
      <input
        name="image"
        type="text"
        value={form.image}
        onChange={handleForm}
        placeholder="image"
      />
      <input
        name="calories"
        type="number"
        value={form.calories}
        onChange={handleForm}
        placeholder="calories"
      />
      <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddFood;
