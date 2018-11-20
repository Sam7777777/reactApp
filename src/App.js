import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import CounterForm from './components/counterForm';
import NotFound from './components/notFound';

class App extends Component {
  state = {}
  render() {
    return (
      <main className="container">
        <Switch>
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={CounterForm} ></Route>
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;














// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
