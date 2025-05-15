import './App.css';
import { useEffect, useState } from 'react';
import Fruit from './Fruit';

type FruitType = {
  id: string;
 author_name: number;
  birth_date: number;
};

function App() {
  const [fruits, setFruits] = useState<FruitType[]>([]);

  useEffect(() => {
    fetch('/fruits.json')
      .then(res => res.json())
      .then(data => setFruits(data));
  }, []);

  return (
    <>
      {fruits.map((fruit, index) => (
        <Fruit
          key={index}
        id={fruit.id}
          author_name={fruit.author_name}
          birth_date={fruit.birth_date}
        />
      ))}
    </>
  );
}

export default App;
