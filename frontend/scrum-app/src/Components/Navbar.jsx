import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar-parent">
      <nav className="navbar">
        <h1 className="navbar-title">Scrum Guiden</h1>
        <ul className="navbar-links">
          <Link className="link" to="/">
            <li className="navbar-link">Guide</li>
          </Link>
          <Link className="link" to="/quiz">
            <li className="navbar-link">Quiz</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
