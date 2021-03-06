import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import INITIAL_STATE from "./store/preloadedState";
import configureStore from "./store/configureStore";

import App from "./App";
import Notebook from "./Notebook";
import Commuter from "./Commuter";
import Discovery from "./Discovery";

const store = configureStore(INITIAL_STATE);

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/">
      <div>
        <Route exact path="/" render={() => <Redirect to="/view/" />} />
        <App>
          <Switch>
            <Route path="/discover" component={Discovery} />
            <Route path="/view/*.ipynb" component={Notebook} />
            <Route path="/view/*" component={Commuter} />
          </Switch>
        </App>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
