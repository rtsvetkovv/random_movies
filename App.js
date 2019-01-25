import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Screens } from './components/screens/Screens';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Screens />
      </Provider>
    );
  }
}

export default App;
