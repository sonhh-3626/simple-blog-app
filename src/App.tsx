import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header.tsx';
import PostDetail from './components/PostDetail';
import { initialPosts } from './data/initialPosts.ts';
import About from './pages/About';
import HomePage from './pages/HomePage';

export type PostProps = {
  id: number;
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
    <BrowserRouter>
      <Header title="Chào mừng đến với Blog của tôi!" />
      <main style={{ padding: '0 20px', backgroundColor: '#f9f9f9' }}>
        <Routes>
          <Route path="/" element={<HomePage posts={posts} />} />
          <Route path="/post/:id" element={<PostDetail/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
