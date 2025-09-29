export type PostProps = {
  id: number;
  title: string;
  author: string;
  date: Date;
  excerpt: string;
  content: string;
};

export type PostFormProps = {
  posts: PostProps[];
  setPosts: React.Dispatch<React.SetStateAction<PostProps[]>>;
}
