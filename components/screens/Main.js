import React, { Component } from 'react';
import { Text, Image, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import { Container, Body, Button, Spinner, Icon } from 'native-base';

import Search from '../../static/search.png';
import Background from '../../static/main-bg.jpg';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');

export class Main extends Component {
  randomMovie = () => {
    const page = Math.floor(Math.random() * 700);
    this.props.fetchMovie(page);
  };

  // openeDrawerMenu = () => {
  //   Actions.drawer();
  // };

  render() {
    let MainButton;

    if (this.props.isLoading) {
      MainButton = <Spinner />;
    } else {
      MainButton = (
        <Button
          full
          large
          onPress={this.randomMovie}
          style={{ borderRadius: 2, backgroundColor: '#CC3300' }}
        >
          <Image source={Search} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Что посмотреть?</Text>
        </Button>
      );
    }

    return (
      <Container>
        <ImageBackground source={Background} style={styles.background}>
          {/* <Button onPress={this.openeDrawerMenu} transparent>
            <Icon name="arrow-back" style={{ color: 'white' }} />
          </Button> */}
          <Body style={this.props.isLoading ? styles.spinner : styles.button}>{MainButton}</Body>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 60,
    width: '80%'
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 20
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#fff'
  },
  background: {
    width: '100%',
    height: '100%'
  }
});
