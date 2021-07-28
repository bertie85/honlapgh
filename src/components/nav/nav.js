import { Link } from 'react-router-dom';

import "./style.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg">
    <button className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarToggler"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarToggler">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/rolunk">Rólunk</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/szolgaltatasok">Szolgáltatások</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dokumentumok">Dokumentumok</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/kapcsolat">Kapcsolat</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Nav;
