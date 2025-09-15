import { useState } from "react";

export default function NewPost({ posts, setPosts, goToHome }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, { title, description, image }]);
    goToHome();
  };

  return (
    <div className="page">
      <h2>Create New Post</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          className="textarea"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          className="input"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button className="button" type="submit">Post</button>
        <button className="button" type="button" onClick={goToHome}>← Back</button>
      </form>
    </div>
  );
}
