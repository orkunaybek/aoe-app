import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Nav from './components/Nav';
import routes from './router/routes';
import setUnitList from './store/actions';
import units from './assets/data/db.json';

class App extends Component {
  componentDidMount() {
    const { setUnits } = this.props;
    setUnits();
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Nav />
          <Switch>
            {routes.map((route) => (
              <Route
                path={route.path}
                exact
                key={route.key}
                render={(props) => <route.component {...props} />}
              />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  setUnits: () => {
    dispatch(setUnitList(units.units));
  },
});

App.defaultProps = {
  setUnits: () => {},
};
App.propTypes = {
  setUnits: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
