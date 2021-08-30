import Nav from '../../components/nav/nav';
// import { Link } from 'react-router-dom';
import './style.css';

const Header = (props) => (
  <header className="App-header">
    {/* <Link className="nav-link" to="/"> */}
      {/* <img className="App-logo-header" src="logo.png"></img> */}
    {/* </Link> */}
    <Nav />
  </header>
)

export default Header;
