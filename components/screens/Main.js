import React, { Component } from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { Container, Body, Button } from 'native-base';
import Search from '../../static/search.png';
import { Actions } from 'react-native-router-flux';

class Main extends Component {
  render() {
    return (
      <Container>
        <Body
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Button
            large
            rounded
            style={{ paddingHorizontal: 30 }}
            onPress={() => Actions.movie()}
          >
            <Image
              source={Search}
              style={{ width: 30, height: 30, marginRight: 20 }}
            />
            <Text style={styles.buttonText}>Что посмотреть?</Text>
          </Button>
        </Body>
      </Container>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    backgroundColor: 'transparent'
  }
});
