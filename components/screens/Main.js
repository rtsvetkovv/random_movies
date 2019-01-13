import React, { Component } from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { Container, Body, Button, Spinner } from 'native-base';
import Search from '../../static/search.png';

class Main extends Component {
  render() {
    let MainButton;

    if (this.props.isLoading) {
      MainButton = <Spinner />;
    } else {
      MainButton = (
        <Button
          large
          rounded
          style={{ paddingHorizontal: 30 }}
          onPress={() => this.props.handleFetchMovies()}
        >
          <Image
            source={Search}
            style={{ width: 30, height: 30, marginRight: 20 }}
          />
          <Text style={styles.buttonText}>Что посмотреть?</Text>
        </Button>
      );
    }

    return (
      <Container>
        <Body style={styles.body}>{MainButton}</Body>
      </Container>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#fff'
  }
});
