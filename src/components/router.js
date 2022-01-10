import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/rolunk';
import Szolgaltatasok from '../pages/szolgaltatasok';
import Nyomtatvanyok from '../pages/nyomtatvanyok';
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
    <Route path="/nyomtatvanyok">
      <Nyomtatvanyok />
    </Route>
    <Route path="/kapcsolat">
      <Kapcsolat />
    </Route>
    <Route path="*">
      <PageNotFound />
    </Route>
  </Switch>
)

const PageNotFound = () => (<h3>A www.gondviseles-haza.hu<code>{window.location.pathname}</code> címen nem található oldal.</h3>);

export default Router;
