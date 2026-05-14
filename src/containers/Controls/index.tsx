import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import './style.css';

interface IControls {
  buttonHandler: (input: string) => void;
}

export const Controls = (props: IControls) => {
  const { buttonHandler } = props;
  const [input, setInput] = useState('');

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const eventHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    buttonHandler(input);
  };

  return (
    <form onSubmit={eventHandler} className="controls">
      <TextField
        className="input"
        onChange={inputHandler}
        placeholder="Placeholder"
        variant="outlined"
        sx={{
          width: '100%',
          marginRight: '10px',
          '& .MuiInputBase-input': {
            padding: '8px',
          },
        }}
      />
      <Button type="submit" variant="contained">
        Search
      </Button>
    </form>
  );
};
