import { useState, useEffect } from 'react';

import { Header } from './Header';
import { PostCard } from './PostCard';
import { initialPosts } from './data/initialPosts.ts';

type PostProps = {
  title: string;
  author: string;
  date: Date;
  excerpt: string;
};

function App() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let dataFromLocalStorage = localStorage.getItem("posts");
    if (dataFromLocalStorage) {
      setPosts(JSON.parse(dataFromLocalStorage));
    } else {
      setPosts(initialPosts);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if(!loading) {
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  }, [posts, loading]);

  return (
    <>
      <Header title="Chào mừng đến với Blog của tôi!" />
      <main style={{ padding: '0 20px', backgroundColor: '#f9f9f9' }}>
        {posts.map((post : PostProps, index : number) => (
          <PostCard
            key={index}
            title={post.title}
            author={post.author}
            date={post.date}
            excerpt={post.excerpt}
          />
        ))}
      </main>
    </>
  )
}

export default App
