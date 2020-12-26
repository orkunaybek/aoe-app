import React, {useContext, useEffect} from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Units from "./pages/Units";
import UnitDetail from "./pages/UnitDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UnitContext } from "./context/UnitContext";
import units from "./assets/data/db.json"

const App = () => {
  const {  setUnitList } = useContext(UnitContext);
  useEffect(()=>{
    setUnitList(units.units);
  }, [setUnitList])
  return (
    <Router>
      <div className="app">
        <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/units"
              exact
              component={Units}
            />
            <Route path="/units/:id" component={UnitDetail} />
          </Switch>
      </div>
    </Router>
  );
};

export default App;
