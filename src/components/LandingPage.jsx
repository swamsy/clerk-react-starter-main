import logo from "../logo.svg";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="app">
      <h1>Clerk + React</h1>
      <img src={logo} alt="logo" />
      <a
        href="https://docs.clerk.dev/reference/clerk-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more
      </a>
    </div>
  );
}

export default LandingPage;
