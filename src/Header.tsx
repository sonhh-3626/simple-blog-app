import styles from "./Header.module.css";

export function Header(props: { title: string }) {
  return <h1 className={styles.header}>{props.title}</h1>;
}
