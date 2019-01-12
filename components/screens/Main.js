import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Container, Header, Body, Button, Icon } from 'native-base';
import Search from '../../static/search.png';

class Main extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Body
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Button large rounded style={{ paddingHorizontal: 30 }}>
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
