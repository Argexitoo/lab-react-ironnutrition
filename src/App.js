import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foods);


  const handleOnAdd = (newFood) => {
    setFood([
      ...food,
      {
        name: newFood.name,
        image: newFood.image,
        calories: newFood.calories,
      },
    ]);
  };

  const handleOnFilter = (input) => {
    const filteredFood = food.filter((food) =>
      food.name.toLowerCase().includes(input.toLowerCase())
    );
    setFood(filteredFood);
    if (input === '') {
      setFood(foods);
    }
  };

  return (
    <div>
      <AddFood onAdd={handleOnAdd} />
      <Search onFilter={handleOnFilter} />
      {food.map((products) => {
        return (
          <FoodBox
            key={products.id}
            name={products.name}
            calories={products.calories}
            quantity={products.quantity}
            image={products.image}
          />
        );
      })}
      )
    </div>
  );
}

export default App;
