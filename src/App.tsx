import { useState } from 'react';
import './App.css';
import { Result } from './container/Result';
import { Controls } from './container/Controls';

function App() {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className="wrapper">
      <div className="header">
        <h1>Anime</h1>
        <Controls
          setResult={setResult}
          setIsLoading={setIsLoading}
          setIsError={setIsError}
        />
      </div>
      <Result isLoading={isLoading} isError={isError} result={result} />
    </div>
  );
}

export default App;
