import React from 'react';
import { Router, Scene, Stack, Drawer } from 'react-native-router-flux';
import { MainScreen } from '../../containers/MainScreen';
import { MovieScreen } from '../../containers/MovieScreen';
import { Menu } from '../Menu/Menu';

import Icon from '../../static/show-menu-button.png';

export const Screens = () => {
  return (
    <Router>
      <Stack key="root">
        <Drawer
          key="drawer"
          drawerPosition="left"
          contentComponent={Menu}
          drawerWidth={350}
          hideNavBar
          back
        >
          <Scene key="main" component={MainScreen} hideNavBar initial />
          <Scene key="movie" component={MovieScreen} title="Название фильма" hideNavBar />
        </Drawer>
      </Stack>
    </Router>
  );
};
