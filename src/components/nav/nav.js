import { Link } from 'react-router-dom';
import "./style.css";

const Nav = () => (
  <nav className="navbar navbar-dark navbar-expand-lg">
    {/* Logo */}
    <Link className="nav-link" to="/">
      <img alt='logo' src="logo.png" className='header-logo'></img>
    </Link>

    {/* justify-content-end */}
    <button className="navbar-toggler collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div id="navbarToggler" className="navbar-collapse collapse">
      <ul className="nav navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/rolunk">Rólunk</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/szolgaltatasok">Szolgáltatások</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/nyomtatvanyok">Nyomtatványok</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/kapcsolat">Kapcsolat</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Nav;
