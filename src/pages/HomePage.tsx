import PostCard from '../components/PostCard';
import type { PostProps } from '../types';

type HomePageProps = {
  posts: PostProps[];
};

const HomePage = ({ posts }: HomePageProps) => {
  return (
    <>
      {posts.map((post: PostProps) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          date={post.date}
          excerpt={post.excerpt}
        />
      ))}
    </>
  );
};

export default HomePage;
