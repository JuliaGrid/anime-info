import { useState } from 'react';

interface IControls {
  buttonHandler: (input: string) => void;
}

export const Controls = (props: IControls) => {
  const { buttonHandler } = props;
  const [input, setInput] = useState('');

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="controls">
      <input onChange={inputHandler} value={input} />
      <button onClick={() => buttonHandler(input)}>Search</button>
    </div>
  );
};
