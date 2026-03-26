import { useState } from 'react';

export default function MyInput() {
  const [text, setText] = useState<string>('Valor inicial');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <p>Valor que você está digitando: {text}</p>
      <button onClick={() => setText('Valor depois que clicar no reset')}>
        Reset
      </button>
    </>
  );
}