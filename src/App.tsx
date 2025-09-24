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
  return (
    <>
      <Header title="Chào mừng đến với Blog của tôi!" />
      <main style={{ padding: '0 20px', backgroundColor: '#f9f9f9' }}>
        {initialPosts.map((post : PostProps, index : number) => (
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
