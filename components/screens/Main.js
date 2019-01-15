import React, { Component } from 'react';
import { Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { Container, Body, Button, Spinner } from 'native-base';
import Search from '../../static/search.png';
import Background from '../../static/main-bg.jpg';

class Main extends Component {
  render() {
    let MainButton;

    if (this.props.isLoading) {
      MainButton = <Spinner />;
    } else {
      MainButton = (
        <Button large full onPress={() => this.props.handleFetchMovies()}>
          <Image source={Search} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Что посмотреть?</Text>
        </Button>
      );
    }

    return (
      <Container>
        <ImageBackground source={Background} style={styles.background}>
          <Body style={this.props.isLoading ? styles.spinner : styles.button}>
            {MainButton}
          </Body>
        </ImageBackground>
      </Container>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 60,
    width: '80%'
  },
  buttonIcon: {
    width: 30,
    height: 30,
    marginRight: 30
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
