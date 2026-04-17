import { Link } from 'react-router-dom';
import classes from './styles.module.css';

export function Header() {
  return (
    <header className={classes.header}>
      <div />
      <h1 className={classes.header__title}>AnimeList</h1>
      <nav className={classes.header__nav}>
        <Link className={classes.header__link} to="/">
          Главная
        </Link>
        <Link className={classes.header__link} to="/login">
          Вход
        </Link>
      </nav>
    </header>
  );
}
