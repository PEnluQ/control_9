import React, {Fragment} from 'react';
import {Route, Switch} from "react-router";
import Toolbar from "./components/Toolbar/Toolbar";
import HomePage from "./containers/HomePage/HomePage";
import NewContacts from "./containers/NewContacts/NewContacts";
import './App.css';

function App() {
  return (
    <Fragment>
        <Toolbar/>
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/new' component={NewContacts}/>
        </Switch>
    </Fragment>
  );
}

export default App;