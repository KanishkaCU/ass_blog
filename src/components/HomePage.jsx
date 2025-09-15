export default function HomePage({ posts, goToNewPost, goToPostDetails }) {
  return (
    <div className="page">
      <h2>Home Page</h2>
      <button className="button" onClick={goToNewPost}>
        + New Post
      </button>
      <div>
        {posts.length === 0 && <p>No posts yet. Create one!</p>}
        {posts.map((post, index) => (
          <div
            key={index}
            className="post"
            onClick={() => goToPostDetails(post)}
          >
            {post.image && <img src={post.image} alt="post" />}
            <h3>{post.title}</h3>
            <p>{post.description.slice(0, 50)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
