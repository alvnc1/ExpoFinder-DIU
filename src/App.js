import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Componentes
import Home from './components/Home';
import ProjectSearch from './components/ProjectSearch';
import PastEditions from './components/PastEditions';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/buscar" component={ProjectSearch} />
        <Route path="/ediciones-pasadas" component={PastEditions} />
      </Switch>
    </Router>
  );
}

export default App;

