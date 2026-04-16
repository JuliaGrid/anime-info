import { type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

export function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Paper elevation={4} sx={{ p: 4 }}>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Typography
            component="h1"
            variant="h5"
            sx={{ mb: 3, textAlign: 'center' }}
          >
            Вход в аккаунт
          </Typography>

          <TextField
            label="Логин"
            variant="outlined"
            fullWidth
            margin="normal"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            required
          />

          <TextField
            label="Пароль"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3 }}
            disabled={!login || !password}
          >
            Войти
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
