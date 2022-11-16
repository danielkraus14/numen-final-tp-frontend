import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>AniFlix</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Animes</Link>
          </li>
          <li>
            <Link href='/new-anime'>Add New Anime</Link>
          </li>
          <li>
            <Link href='/signin'>Sign In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
