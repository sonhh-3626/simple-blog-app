export function PostCard(props: { title: string; author: string; date: Date; excerpt: string;  }) {
  return (
    <div className="post-card">
      <h2>{props.title}</h2>
      <p>By {props.author} on {props.date.toLocaleDateString()}</p>
      <p>{props.excerpt}</p>
      <button>Read More</button>
    </div>
  );
}
