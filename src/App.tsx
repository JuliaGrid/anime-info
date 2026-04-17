import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import classes from './app/styles.module.css';

const Main = lazy(() =>
  import('./pages/Main').then((module) => ({ default: module.Main }))
);
const Login = lazy(() =>
  import('./pages/Login').then((module) => ({ default: module.Login }))
);

function App() {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <div className={classes.content}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Main />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
