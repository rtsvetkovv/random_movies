import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Main from './Main';
import Movie from './Movie';

const Screens = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="main" component={Main} title="Главный экран" initial />
        <Scene key="movie" component={Movie} title="Название фиьлма" />
      </Scene>
    </Router>
  );
};

export default Screens;
