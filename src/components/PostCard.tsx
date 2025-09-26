import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";

export default function PostCard(props: { key: number; id: number; title: string; author: string; date: Date; excerpt: string; }) {
  const dateObj = props.date instanceof Date ? props.date : new Date(props.date);
  console.log(props.id);

  return (
    <div className={styles["post-card-border"]}>
      <h2>{props.title}</h2>
      <p className={styles["post-card-meta"]}>Bởi {props.author} vào ngày {dateObj.toLocaleDateString()}</p>
      <p>{props.excerpt}</p>
      <Link to={`/post/${props.id}`} className={styles.readMoreButton}>Read More</Link>
    </div>
  );
}
