import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/rolunk';
import Szolgaltatasok from '../pages/szolgaltatasok';
import Dokumentumok from '../pages/dokumentumok';
import Kapcsolat from '../pages/kapcsolat';

const Router = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/rolunk">
      <About />
    </Route>
    <Route path="/szolgaltatasok">
      <Szolgaltatasok />
    </Route>
    <Route path="/dokumentumok">
      <Dokumentumok />
    </Route>
    <Route path="/kapcsolat">
      <Kapcsolat />
    </Route>
    <Route path="*">
      <PageNotFound />
    </Route>
  </Switch>
)

const PageNotFound = () => (<h3>The page <code>{window.location.pathname}</code> does not exist.</h3>);

export default Router;
