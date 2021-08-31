import classes from './MainNavigation.module.css';
import Link from 'next/link'

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>BD BEAUTY</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Places</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Place</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
