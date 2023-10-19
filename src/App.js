import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Themes from './pages/Themes';
import PastVersions from './pages/PastVersions';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/themes" component={Themes} />
        <Route path="/past-versions" component={PastVersions} />
      </Switch>
    </Router>
  );
};

export default App;



