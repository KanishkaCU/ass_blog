import { useState } from "react";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import NewPost from "./components/NewPost";
import PostDetails from "./components/PostDetails";
import "./App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("landing"); 
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const goToLanding = () => setCurrentPage("landing");
  const goToHome = () => setCurrentPage("home");
  const goToNewPost = () => setCurrentPage("new");
  const goToPostDetails = (post) => {
    setSelectedPost(post);
    setCurrentPage("details");
  };

  return (
    <div>
      {currentPage === "landing" && <LandingPage goToHome={goToHome} />}
      {currentPage === "home" && (
        <HomePage
          posts={posts}
          goToNewPost={goToNewPost}
          goToPostDetails={goToPostDetails}
        />
      )}
      {currentPage === "new" && (
        <NewPost posts={posts} setPosts={setPosts} goToHome={goToHome} />
      )}
      {currentPage === "details" && (
        <PostDetails post={selectedPost} goToHome={goToHome} />
      )}
    </div>
  );
}
