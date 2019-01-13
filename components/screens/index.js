import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import MainScreen from '../../containers/MainScreen';
import Movie from './Movie';

const Screens = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="main"
          component={MainScreen}
          title="Главный экран"
          initial
        />
        <Scene key="movie" component={Movie} title="Название фиьлма" />
      </Scene>
    </Router>
  );
};

export default Screens;
