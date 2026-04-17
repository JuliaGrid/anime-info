import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

const loginSchema = yup.object({
  login: yup.string().required('Введите логин'),
  password: yup
    .string()
    .required('Введите пароль')
    .min(6, 'Пароль должен содержать минимум 6 символов'),
});

type LoginFormValues = {
  login: string;
  password: string;
};

export function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
    mode: 'onTouched',
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const onSubmit = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Paper elevation={4} sx={{ p: 4 }}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
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
            {...register('login')}
            error={Boolean(errors.login)}
            helperText={errors.login?.message}
          />

          <TextField
            label="Пароль"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register('password')}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3 }}
            disabled={!isValid}
          >
            Войти
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
