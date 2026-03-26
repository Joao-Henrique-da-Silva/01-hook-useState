import React, { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <p>Valor atual: {counter}</p>
      <button onClick={incrementCounter}>Incrementar</button>
    </div>
  );
}