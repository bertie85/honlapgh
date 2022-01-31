import { Link } from 'react-router-dom';
import { PersonCircle, EnvelopeFill, TelephoneFill, HouseFill } from 'react-bootstrap-icons';
import './style.css';

const Footer = () => (
  <footer className="App-footer">
    <div className='container px-4'>
      <div className='row justify-content-lg-between justify-content-center'>
        {/* Nav */}
        <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 mb-1 pl-4">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
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

        {/* Kapcsolat */}
        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 my-1">
          <div className="row align-items-center">
            <HouseFill />&nbsp;1025, Budapest, Szilfa utca 4.
          </div>

          <div className='row mt-2 align-items-center'>
            <TelephoneFill />&nbsp;06 1 392 54 34
          </div>

          <div className='row mt-2 align-items-center'>
            <EnvelopeFill />&nbsp;gondviseles.haza@ferencesek.hu
          </div>

          <div className='row mt-2 align-items-center'>
            <PersonCircle />&nbsp;<b>Intézményvezető:</b>&nbsp;Mészáros Ágnes
          </div>
        </div>

        {/* Logo */}
        <div className="col-lg-auto col-md-4 col-sm-6 col-xs-12 mt-1">
          <div className="img-container">
            <img alt='logo' src="logo.png"></img>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer;
