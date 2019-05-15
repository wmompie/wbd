import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../layouts/App.css';

import Main from './Main';
import Terms from './Terms';
import Privacy from './Privacy';
import NotFound from './NotFound';
import Resume from './Resume';

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
