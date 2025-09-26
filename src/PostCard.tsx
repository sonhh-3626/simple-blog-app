import Button from './Button'
import styles from "./PostCard.module.css";

export function PostCard(props: { title: string; author: string; date: Date; excerpt: string;  }) {
  const dateObj = props.date instanceof Date ? props.date : new Date(props.date);

  return (
    <div className={styles['post-card-border']}>
      <h2>{props.title}</h2>
      <p>By {props.author} on {dateObj.toLocaleDateString()}</p>
      <p>{props.excerpt}</p>
      <Button text="Read More" />
    </div>
  );
}
