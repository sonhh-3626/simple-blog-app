import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { PostProps } from "../types";
import type { PostFormProps } from "../types";
import styles from "./PostForm.module.css";

export default function PostForm({ posts, setPosts }: PostFormProps) {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === Number(id));

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setAuthor(post.author);
      setExcerpt(post.excerpt);
      setContent(post.content);
    }
  }, [post]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !author || !excerpt || !content) {
      alert("Vui lòng điền đầy đủ tất cả các trường.");
      return;
    }

    if (post) {
      const updatedPost: PostProps = {
        ...post,
        title,
        author,
        excerpt,
        content,
        date: new Date(),
      };

      setPosts((prevPosts) =>
        prevPosts.map((p) => (p.id === post.id ? updatedPost : p))
      );

      navigate(`/post/${post.id}`);
    } else {
      const newPost: PostProps = {
        id: Date.now(),
        title,
        author,
        excerpt,
        content,
        date: new Date(),
      };

      setPosts((prevPosts) => [...prevPosts, newPost]);
      navigate(`/post/${newPost.id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formGroup}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Excerpt:</label>
        <input
          type="text"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        {post ? "Update Post" : "Create Post"}
      </button>
    </form>
  );
}
