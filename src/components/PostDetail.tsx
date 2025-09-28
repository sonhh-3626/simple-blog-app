import { useParams } from "react-router-dom";

import styles from "./PostDetail.module.css";
import Button from "./Button";
import type { PostProps } from "../types";

interface PostDetailProps {
  posts: PostProps[];
}

export default function PostDetail({ posts }: PostDetailProps) {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id || ""));

  if (!post) {
    return <div>Bài viết không tìm thấy.</div>;
  }

  const goToBackLocation = () => {
    window.history.back();
  }

  return (
    <div className={styles["post-detail"]}>
      <Button text="Quay lại" onClick={goToBackLocation} />
      <h2 className={styles["post-detail-title"]}>{post.title}</h2>
      <p className={styles["post-detail-meta"]}>
        Bởi {post.author} vào ngày {post.date.toLocaleDateString()}
      </p>
      <p className={styles["post-detail-excerpt"]}>{post.excerpt}</p>
      <p className={styles["post-detail-content"]}>{post.content}</p>
    </div>
  );
}
