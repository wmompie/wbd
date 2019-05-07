import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Main from './components/main/Main';
import Terms from './components/pages/Terms';
import Privacy from './components/pages/Privacy';
import NotFound from './components/notfound/NotFound';
import Resume from './components/pages/Resume';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/terms' component={Terms} />
          <Route path='/privacy' component={Privacy} />
          <Route path='/resume' component={Resume} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
