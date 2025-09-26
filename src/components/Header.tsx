import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

export default function Header(props: { title: string }) {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.header}>{props.title}</h1>
      <nav>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/about" className={styles.navLink}>About</Link>
      </nav>
    </div>
  );
}
