import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Main from './components/screens/Main';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
