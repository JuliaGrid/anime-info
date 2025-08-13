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

  return (
    <div className="controls">
      <TextField
        className="input"
        onChange={inputHandler}
        placeholder="Placeholder"
        variant="outlined"
        sx={{
          marginRight: '10px',
          '& .MuiInputBase-input': {
            padding: '8px',
          },
        }}
      />
      <Button variant="contained" onClick={() => buttonHandler(input)}>
        Search
      </Button>
    </div>
  );
};
