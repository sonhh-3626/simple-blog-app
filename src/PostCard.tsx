import Button from './Button'
import styles from "./PostCard.module.css";

export function PostCard(props: { title: string; author: string; date: Date; excerpt: string;  }) {
  return (
    <div className={styles['post-card-border']}>
      <h2>{props.title}</h2>
      <p>By {props.author} on {props.date.toLocaleDateString()}</p>
      <p>{props.excerpt}</p>
      <Button text="Read More" />
    </div>
  );
}
