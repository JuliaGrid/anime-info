import { useState } from 'react';

interface IControls {
  setResult: React.Dispatch<React.SetStateAction<never[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Result {
  title: string;
}

export const Controls = (props: IControls) => {
  const { setResult, setIsLoading, setIsError } = props;
  const [input, setInput] = useState('');

  const buttonHandler = () => {
    setIsLoading(true);
    fetch(`https://api.jikan.moe/v4/anime?q=${input}`)
      .then((response) => response.json())
      .then((result) =>
        setResult(result.data.map((item: Result) => item.title))
      )
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="controls">
      <input onChange={inputHandler} value={input} />
      <button onClick={buttonHandler}>Search</button>
    </div>
  );
};
