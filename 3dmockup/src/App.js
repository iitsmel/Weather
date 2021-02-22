import './App.css';
import { Route, Switch, BrowserRouter } from 'react-dom';
import CoolGlobe from './building/CoolGlobe';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CoolGlobe} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;


