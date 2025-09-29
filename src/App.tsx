import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header.tsx';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm.tsx';

import About from './pages/About';
import HomePage from './pages/HomePage';

import { initialPosts } from './data/initialPosts.ts';
import type { PostProps } from './types';
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let dataFromLocalStorage = localStorage.getItem("posts");
    if (dataFromLocalStorage) {
      const parsedPosts: PostProps[] = JSON.parse(dataFromLocalStorage);
      setPosts(parsedPosts.map(post => ({
        ...post,
        date: new Date(post.date),
      })));
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
    <ThemeProvider>
      <BrowserRouter>
        <Header title="Chào mừng đến với Blog của tôi!" />
          <main style={{ padding: '0 80px' }}>
          <Routes>
            <Route path="/" element={<HomePage posts={posts} />} />
            <Route path="/post/:id" element={<PostDetail posts={posts} setPosts={setPosts} />} />
            <Route path="/about" element={<About />} />
            <Route path="/new-post" element={<PostForm posts={posts} setPosts={setPosts} />} />
            <Route path="/edit-post/:id" element={<PostForm posts={posts} setPosts={setPosts} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
