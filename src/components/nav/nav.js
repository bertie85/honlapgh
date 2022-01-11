import { Link } from 'react-router-dom';

import "./style.css";

const Nav = () => (
  <div className='container header'>
    {/*  d-flex justify-content-center */}
    {/* Logo */}
    <div className='row'>
      <Link className="col d-flex justify-content-end nav-link" to="/">
        <img alt='logo' src="logo.png" className='header-logo'></img>
      </Link>

      {/* Nav */}
      <nav className="col navbar d-flex justify-content-end navbar-expand-lg">
        {/* justify-content-end */}
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
          <ul className="navbar-nav mr-auto">
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
    </div>
  </div>
)

export default Nav;
