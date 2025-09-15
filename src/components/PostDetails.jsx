export default function PostDetails({ post, goToHome }) {
  if (!post) return <p>No post found!</p>;

  return (
    <div className="page">
      <button className="button" onClick={goToHome}>← Back</button>
      <h2>{post.title}</h2>
      {post.image && <img src={post.image} alt="post" />}
      <p>{post.description}</p>
    </div>
  );
}
