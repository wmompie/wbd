import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MDSpinner from 'react-md-spinner';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layouts/App.css';

import Main from './pages/Main';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import Resume from './pages/Resume';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  render() {
    const { loading } = this.state;
    // eslint-disable-next-line
    {
      if (loading) {
        return (
          <div className='App'>
            <Loading>LOADING...</Loading>
            <div id='spinner'>
              <MDSpinner size={70} borderSize={5} singleColor='#01a4e4' />
            </div>
            <Loading>We thank you for your patience</Loading>
          </div>
        );
      } else {
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
    }
  }
}

export default App;

const Loading = styled.h2`
  color: #01a4e4;
  letter-spacing: 1.5;
  margin-top: 50px;
  padding: 0 10px;
  text-align: center;
`;
