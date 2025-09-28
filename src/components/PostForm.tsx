import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { PostProps } from "../types";
import styles from "./PostForm.module.css";

interface PostFormProps {
  setPosts: React.Dispatch<React.SetStateAction<PostProps[]>>;
}

export default function PostForm({ setPosts }: PostFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: PostProps = {
      id: Date.now(),
      title,
      author,
      excerpt,
      content,
      date: new Date(),
    };

    if (!title || !author || !excerpt || !content) {
      alert("Vui lòng điền đầy đủ tất cả các trường.");
      return;
    }

    setPosts((prevPosts: PostProps[]) => [...prevPosts, newPost]);

    navigate(`/post/${newPost.id}`);
  }

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
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  )
}
