export default function LandingPage({ goToHome }) {
  return (
    <div className="page">
      <h1>Welcome</h1><br></br>
      <p>Click on below button to<br></br> go to home page</p><br></br>
      <button className="button" onClick={goToHome}>Home</button>
    </div>
  );
}
