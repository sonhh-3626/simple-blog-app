import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import type { PostProps } from "../types";

type PostCardProps = Omit<PostProps, 'content'>;

export default function PostCard({ id, title, author, date, excerpt }: PostCardProps) {
  const dateObj = date instanceof Date ? date : new Date(date);

  return (
    <div className={styles["post-card-border"]}>
      <h2>{title}</h2>
      <p className={styles["post-card-meta"]}>Bởi {author} vào ngày {dateObj.toLocaleDateString()}</p>
      <p>{excerpt}</p>
      <Link to={`/post/${id}`} className={styles.readMoreButton}>Read More</Link>
    </div>
  );
}
