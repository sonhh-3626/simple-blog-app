import { useParams, Link } from "react-router-dom";

import styles from "./PostDetail.module.css";
import Button from "./Button";
import type { PostFormProps } from "../types";

export default function PostDetail({ posts, setPosts }: PostFormProps) {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id || ""));

  if (!post) {
    return <div>Bài viết không tìm thấy.</div>;
  }

  const goToBackLocation = () => {
    window.history.back();
  }

  const deletePost = () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa bài viết này không?")) {
      const updatedPosts = posts.filter((p) => p.id !== post.id);
      setPosts(updatedPosts);
      window.history.back();
    }
  }

  return (
    <div className={styles["post-detail"]}>
      <div className={styles.handleBtn}>
        <Button text="Quay lại" onClick={goToBackLocation} />

        <div className={styles.actionGroup}>
          <Link to={`/edit-post/${post.id}`} className={styles.updatedPost}>
            Cập nhập bài viết
          </Link>
          <Button text="Xóa" onClick={deletePost} color="#f44336" />
        </div>
      </div>

      <h2 className={styles["post-detail-title"]}>{post.title}</h2>
      <p className={styles["post-detail-meta"]}>
        Bởi {post.author} vào ngày {post.date.toLocaleDateString()}
      </p>
      <p className={styles["post-detail-excerpt"]}>{post.excerpt}</p>
      <p className={styles["post-detail-content"]}>{post.content}</p>
    </div>
  );
}
