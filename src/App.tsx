import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const Main = lazy(() =>
  import('./pages/Main').then((module) => ({ default: module.Main }))
);
const Login = lazy(() =>
  import('./pages/Login').then((module) => ({ default: module.Login }))
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
