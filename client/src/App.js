import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from "./views/Update";

function App() {

  return (
    <div className="App">
      <h1>Welcome to the home page!</h1>
      <Router>
        <Main path="/api/people/"/>
        <Detail path="/api/people/:id" />
        <Update path="/api/people/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
