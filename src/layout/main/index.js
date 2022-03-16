import Router from '../../components/router';
import Alert from '../../components/alert/alert';
import alerts from '../../components/alert/alerts.json'
import './style.css';

const Main = () => (
  <main id="App-main" className="App-main">
    {alerts.map(alert => <Alert text={alert} />)}

    <Router />
  </main>
)

export default Main;
