import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.header}>{title}</h1>
      <nav>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/new-post" className={styles.navLink}>Create new post</Link>
        <Link to="/about" className={styles.navLink}>About</Link>
      </nav>
    </div>
  );
}
